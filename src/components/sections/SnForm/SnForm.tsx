import {InputText} from "primereact/inputtext";

export const SnForm = () => {
    return (
        <form method={"POST"}>
            <h2><b>Отправить точку в полет</b></h2>

            <br/>

            <InputText type="text" placeholder="Normal" keyfilter="pint" />
            <InputText type="text" placeholder="Normal" keyfilter="pint" />
        </form>
    )
}