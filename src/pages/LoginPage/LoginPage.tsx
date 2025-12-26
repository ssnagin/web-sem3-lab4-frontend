import Header from "../../components/layout/Header/Header.tsx";
import {useState, type FormEvent, type ChangeEvent} from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import classes from "./LoginPage.module.scss";
import {login} from "../../redux/slices/authSlice.ts";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

function LoginPage() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('https://itmo.ssngn.ru/lab4/api/user/auth/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: formParams.login,
                    password: formParams.password,
                }),
            });

            const data = await response.json();

            if (response.ok && data.status === 'ok' && data.token) {
                dispatch(login({username: formParams.login, token: data.token}));
                navigate('/'); // редирект на main
            } else {
                toast('Ошибка авторизации: ' + (data.message || 'Неизвестная ошибка'));
            }
        } catch (err) {
            console.error(err);
            toast('Сетевая ошибка');
        }
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
