import './styles/App.scss';
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import {MainPage} from "./pages/MainPage/MainPage.tsx";

function App() {
  return (
    <>

        <div className="container-fluid">
            <MainPage />
        </div>
    </>
  )
}

export default App;
