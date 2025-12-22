import './styles/App.scss';
import {MainPage} from "./pages/MainPage/MainPage.tsx";
import {PrimeReactProvider} from "primereact/api";

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import LoginPage from './pages/LoginPage/LoginPage.tsx';
import {useState} from "react";

function App() {

    const [isLoginPage, setIsLoginPage] = useState(false);

    return (
    <>
        <div className="container-fluid">
            <PrimeReactProvider>
                {isLoginPage ? <LoginPage  /> : <MainPage />}
            </PrimeReactProvider>
        </div>
    </>
    )
}

export default App;
