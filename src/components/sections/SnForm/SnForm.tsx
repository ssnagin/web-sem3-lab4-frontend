import {Dropdown} from "primereact/dropdown";

import classes from "./SnForm.module.scss";
import {Slider} from "primereact/slider";
import {Button} from "primereact/button";
import type {RootState} from "../../../redux/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {setR, setX, setY} from "../../../redux/slices/formSlice.ts";

export const SnForm = () => {
    const dispatch = useDispatch();

    const data = {
        x: useSelector((state: RootState) => state.form.x),
        y: useSelector((state: RootState) => state.form.y),
        r: useSelector((state: RootState) => state.form.r),
    };

    const xrValues = ["0.5", "1", "1.5", "2"];

    return (
        <form method={"POST"} className={classes.form + " d-flex flex-column justify-content-start p-3"}>
            <div>
                <h2><b>Отправить точку в полёт</b></h2>
            </div>

            <label>Значение X</label>

            <Dropdown
                value={data.x}
                onChange={(e) => dispatch(setX(String(e.value)))}
                options={xrValues}
                placeholder={"Выберите x"}
            />

            <label>Значение Y: {data.y}</label>

            <Slider
                value={Number(data.y)}
                min={-2}
                max={2}
                step={0.001}
                onChange={(e) => {
                    dispatch(setY(String(e.value)));
                }}
            />

            <label>Значение R</label>

            <Dropdown
                value={data.r}
                onChange={(e) => dispatch(setR(String(e.value)))}
                options={xrValues}
                placeholder={"Выберите радиус"}
            />

            <Button type={"submit"} label={"Бросить точку"} />
            <Button severity={'warning'} type={"submit"} label={"Бросить супер-точку!"} />
        </form>
    )
}