import Header from "../../components/layout/Header/Header.tsx";

function LoginPage() {
    return (
        <>
            <Header />

            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-5 align-self-center d-flex flex-column align-items-center">
                    <form className={"align-self-center d-flex flex-column align-items-center"}>
                        <h2 className=""><b>Войти</b></h2>
                        <input type={"text"} placeholder={"Логин"} />
                        <input type={"password"} placeholder={"Пароль"} />
                        <input type={"submit"} value={"Войти уже наконец-то!"} />
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginPage;