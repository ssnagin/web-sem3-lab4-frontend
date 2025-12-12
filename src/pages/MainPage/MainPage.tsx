import {Navbar} from "../../components/layout/Navbar/Navbar.tsx";
import Header from "../../components/layout/Header/Header.tsx";
import {DefaultMain} from "../../components/layout/DefaultMain/DefaultMain.tsx";


export const MainPage = () => {
    return (
        <>
            <Navbar />
            <Header />
            <DefaultMain />
        </>
    )
}