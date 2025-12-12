import {Dropdown} from "primereact/dropdown";
import {useState} from "react";

import classes from "./SnForm.module.scss";
import {Slider} from "primereact/slider";
import {Button} from "primereact/button";

export const SnForm = () => {

    const [x, setX] = useState("");
    const [y, setY] = useState(0);
    const [r, setR] = useState("");

    const xrValues = ["-2", "-1.5", "-1", "-0.5", "0", "0.5", "1", "1.5", "2"];

    return (
        <form method={"POST"} className={classes.form + " d-flex flex-column justify-content-start p-3"}>
            <div>
                <h2><b>Отправить точку в полёт</b></h2>
            </div>

            <label>Значение X</label>

            <Dropdown
                value={x}
                onChange={(e) => setX(e.value)}
                options={xrValues}
                placeholder={"Выберите x"}
            />

            <label>Значение Y: {y}</label>

            <Slider
                value={y}
                min={-2}
                max={2}
                step={0.001}
                onChange={(e) => {
                    if (typeof e.value === "number") {
                        setY(e.value);
                    }
                }}
            />

            <label>Значение R</label>

            <Dropdown
                value={r}
                onChange={(e) => setR(e.value)}
                options={xrValues}
                placeholder={"Выберите радиус"}
            />

            <Button type={"submit"} label={"test"} />
        </form>
    )
}