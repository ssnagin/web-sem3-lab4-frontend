import Header from "../../components/layout/Header/Header.tsx";
import {useState, type FormEvent, type ChangeEvent} from "react";

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
                <div className="col-5 align-self-center d-flex flex-column align-items-center">
                    <form 
                        className={"align-self-center d-flex flex-column align-items-center"}
                        onSubmit={handleSubmit}
                    >
                        <h2 className=""><b>Войти</b></h2>
                        <input 
                            type={"text"} 
                            onChange={handleInputChange('login')} 
                            value={formParams.login}
                            placeholder={"Логин"} 
                        />
                        <input 
                            type={"password"} 
                            onChange={handleInputChange('password')} 
                            value={formParams.password}
                            placeholder={"Пароль"} 
                        />
                        <input type={"submit"} value={"Войти уже наконец-то!"} />
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
