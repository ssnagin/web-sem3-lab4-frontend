import { SnCanvas } from '../../ui/canvas/SnCanvas';
import {useSelector} from "react-redux";
import type {RootState} from "../../../redux/store.ts";
import classes from "./SnCoordinatesCanvases.module.scss";
import {Dropdown} from "primereact/dropdown";

function onClick() {

}

export const SnCoordinatesCanvases = () => {

    const currentRadius = useSelector((state: RootState) => state.form.r)

    const testPoints = [
        { x: 1, y: 1, hit: true },
        { x: -1, y: -1, hit: false }
    ];

    return (
        <>
            <div className={classes.canvases + " row"}>
                <div className={"col-lg-9"}>
                    <SnCanvas  r={Number(currentRadius)} points={testPoints} onPointClick={onClick}/>
                </div>
                <div className={"col-lg-3"}>
                    <h3><b>Скины:</b></h3>
                    <Dropdown />
                </div>
            </div>
        </>
    )
}

