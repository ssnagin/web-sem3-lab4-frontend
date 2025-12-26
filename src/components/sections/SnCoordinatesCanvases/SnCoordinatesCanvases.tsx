import {SnCanvas, type SnPoint} from '../../ui/canvas/SnCanvas';
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../../redux/store.ts";
import classes from "./SnCoordinatesCanvases.module.scss";
import {Dropdown} from "primereact/dropdown";
import {useEffect, useState} from "react";
import {fetchAllPoints} from "../../../redux/slices/pointsSlice.ts";

import stars from "../../../assets/images/skins/stars.png";
import russia from "../../../assets/images/skins/russia.jpg";
import nostalgia from "../../../assets/images/skins/nostalgia.jpeg";
import null_ from "../../../assets/images/skins/null.png";


const SKINS = [
    { label: "Безмятежность", value: nostalgia },
    { label: "Звёзды", value: stars },
    { label: "Россия-матушка", value: russia },
    {label: "Ничего", value: null_}
];

const fetchPoints = async (token: string): Promise<SnPoint[]> => {
    const res = await fetch('https://itmo.ssngn.ru/lab4/api/point/all', {
        method: "GET",
        headers: {
            'snAuthToken': token,
        },
    });
    if (!res.ok) throw new Error('Failed to fetch points');

    const json = await res.json();
    console.log("ALL DATA", json)

    return json.data.map((p: any) => ({
        x: p.x,
        y: p.y,
        hit: p.inArea,
    }));
};

export const SnCoordinatesCanvases = () => {

    const [selectedSkin, setSelectedSkin] = useState<string>(null_);

    const dispatch = useDispatch()

    const { token } = useSelector((state: RootState) => state.auth);
    const currentRadius = useSelector((state: RootState) => state.form.r);
    const allPoints = useSelector((state: RootState) => state.points.data);

    const radii = [0.5, 1, 1.5, 2];

    useEffect(() => {
        if (token) dispatch(fetchAllPoints(token));
    }, [dispatch, token]);

    const handlePointClick = () => {
        // throw point event тут
    };

    return (
        <>
            <div className={classes.canvases + " row"}>
                <div className={"col-lg-9"}>

                    {radii.map(r => {
                        const filtered = allPoints.filter(p => p.R === r);
                        return (
                            <div key={r} className="mb-4" hidden={r !== Number(currentRadius)}>
                                <h5>Радиус: {r}</h5>
                                <SnCanvas
                                    r={r}
                                    backgroundImage={selectedSkin}
                                    points={filtered.map(p => ({
                                        x: p.x,
                                        y: p.y,
                                        hit: p.inArea,
                                    }))}
                                    onPointClick={() => {}}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className={"col-lg-3"}>
                    <h3><b>Скины:</b></h3>
                    <Dropdown
                        value={selectedSkin}
                        options={SKINS}
                        onChange={(e) => setSelectedSkin(e.value as string)}
                        optionLabel="label"
                        placeholder="Выберите скин"
                    />
                </div>
            </div>
        </>
    )
}

