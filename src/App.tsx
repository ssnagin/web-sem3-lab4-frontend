import './styles/App.scss';
import {MainPage} from "./pages/MainPage/MainPage.tsx";
import {PrimeReactProvider} from "primereact/api";

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {

    return (
    <>
        <div className="container-fluid">
            <PrimeReactProvider>
                <MainPage />
            </PrimeReactProvider>
        </div>
    </>
    )
}

export default App;
