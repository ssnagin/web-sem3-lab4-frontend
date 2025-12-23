import './styles/App.scss';
import {MainPage} from "./pages/MainPage/MainPage.tsx";
import {PrimeReactProvider} from "primereact/api";

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import LoginPage from './pages/LoginPage/LoginPage.tsx';
// import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "./components/routes/ProtectedRoute.tsx";

function App() {

    // const [isLoginPage, setIsLoginPage] = useState(false);

    return (
    <>
        <div className="container-fluid">
            <PrimeReactProvider>
                <Routes>
                    <Route path="/login" element={<MainPage />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path={"/"} element={<MainPage />} />
                    </Route>
                    <Route path={"*"} element={<ProtectedRoute />} />
                </Routes>
            </PrimeReactProvider>
        </div>
    </>
    )
}

export default App;
