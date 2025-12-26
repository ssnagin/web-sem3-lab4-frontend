import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logout} from "../../../redux/slices/authSlice.ts";
import type {RootState} from "../../../redux/store.ts";
import {Button} from "primereact/button";
import toast from "react-hot-toast";

export const SnProfileSettings = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isAuthenticated, username } = useSelector((state: RootState) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
        toast("Вы вышли. Печально :/")
    };

    return (
        <>
            {isAuthenticated && (
                <div>
                    <h3><b>Здарова, {username}!</b></h3>
                    <Button onClick={handleLogout} label={"выйти"} severity={'danger'} />
                </div>
            )}
        </>
    )
}