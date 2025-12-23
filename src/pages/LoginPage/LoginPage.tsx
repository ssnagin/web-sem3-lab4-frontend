import Header from "../../components/layout/Header/Header.tsx";
import {useState, type FormEvent, type ChangeEvent} from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import classes from "./LoginPage.module.scss";

function LoginPage() {
    const [formParams, setFormParams] = useState<{
        login: string;
        password: string;
    }>({
        login: "",
        password: ""
    });

    const handleInputChange = (field: 'login' | 'password') => (e: ChangeEvent<HTMLInputElement>) => {
        setFormParams({
            ...formParams,
            [field]: e.target.value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Form submitted with:", formParams);
    };

    return (
        <>
            <Header />

            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-6 align-self-center d-flex flex-column align-items-center">
                    <form 
                        className={classes.form + " align-self-center d-flex flex-column align-items-center"}
                        onSubmit={handleSubmit}
                    >
                        <h2 className=""><b>Войти</b></h2>

                        <InputText

                        type={"text"}
                        onChange={handleInputChange('login')}
                        value={formParams.login}
                        placeholder={"Логин"}

                        />
                        <InputText
                            type={"password"}
                            onChange={handleInputChange('password')}
                            value={formParams.password}
                            placeholder={"Пароль"}
                        />

                        <Button type={"submit"} label={"Войти уже наконец-то!"} />
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
