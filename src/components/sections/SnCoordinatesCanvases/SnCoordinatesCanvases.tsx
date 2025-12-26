import {SnCanvas, type SnPoint} from '../../ui/canvas/SnCanvas';
import {useSelector} from "react-redux";
import type {RootState} from "../../../redux/store.ts";
import classes from "./SnCoordinatesCanvases.module.scss";
import {Dropdown} from "primereact/dropdown";
import {useEffect, useState} from "react";

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

    const { token } = useSelector((state: RootState) => state.auth);
    const currentRadius = useSelector((state: RootState) => state.form.r);
    const [points, setPoints] = useState<SnPoint[]>([]);

    useEffect(() => {
        if (!token) return;
        fetchPoints(token)
            .then(setPoints)
            .catch(console.error);
    }, [token]);

    const handlePointClick = () => {
        // оставлю пустым пока
    };

    return (
        <>
            <div className={classes.canvases + " row"}>
                <div className={"col-lg-9"}>
                    <SnCanvas  r={Number(currentRadius)} points={points} onPointClick={handlePointClick}/>
                </div>
                <div className={"col-lg-3"}>
                    <h3><b>Скины:</b></h3>
                    <Dropdown />
                </div>
            </div>
        </>
    )
}

