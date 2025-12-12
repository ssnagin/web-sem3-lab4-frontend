import classes from "./DefaultMain.module.scss";
import {SnForm} from "../../sections/SnForm/SnForm.tsx";

import Markdown from "react-markdown";
import task from "../../../assets/markdown/task.md";

import {SnCoordsTable} from "../../sections/SnCoordsTable/SnCoordsTable.tsx";
import {SnCoordinatesCanvases} from "../../sections/SnCoordinatesCanvases/SnCoordinatesCanvases.tsx";

export const DefaultMain = () => {
    return (
        <main className="container-fluid mt-4">
            <div className="row">
                <div className="col-lg-5 col-xl-5">
                    <section className={classes.section}>

                        <SnForm />

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
