import classes from "./DefaultMain.module.scss";
import {SnForm} from "../../sections/SnForm/SnForm.tsx";

import Markdown from "react-markdown";
import task from "../../../assets/markdown/task.md";

import {SnCoordsTable} from "../../sections/SnCoordsTable/SnCoordsTable.tsx";
import {SnCoordinatesCanvases} from "../../sections/SnCoordinatesCanvases/SnCoordinatesCanvases.tsx";
import {SnProfileSettings} from "../../sections/SnProfileSettings/SnProfileSettings.tsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPoints} from "../../../redux/slices/pointsSlice.ts";
import type {RootState} from "../../../redux/store.ts";

import type { AppDispatch } from "../../../redux/store.ts";

export const DefaultMain = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { token } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (token) {
            dispatch(fetchAllPoints(token));
        }
    }, [dispatch, token]);

    return (
        <main className="container-fluid mt-4">
            <div className="row">
                <div className="col-lg-5 col-xl-5">
                    <section className={classes.section}>

                        <SnForm />

                    </section>
                    <section className={classes.section}>
                        <SnProfileSettings />
                    </section>
                </div>
                <div className="col-lg-7 col-xl-7">
                    <section className={classes.section}>
                        <div>
                            <SnCoordinatesCanvases />
                        </div>
                    </section>

                    <section className={classes.section}>
                        <SnCoordsTable></SnCoordsTable>
                    </section>

                    <section className={classes.section}>
                        <details open>
                            <summary>Показать задание</summary>
                            <Markdown>
                                {task}
                            </Markdown>
                        </details>
                    </section>
                </div>
            </div>
        </main>
    );
}
