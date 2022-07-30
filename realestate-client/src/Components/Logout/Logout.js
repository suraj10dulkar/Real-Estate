import {useNavigate} from "react-router-dom";
import { useCookies } from 'react-cookie';

const Logout = ()=> {
    const navigate = useNavigate();
    const [setCookie] = useCookies([]);

    const handleLogout = ()=> {
        // localStorage.setItem("authorization", "");
        setCookie("jwt", "")
        navigate("/");
    }
    return (
        <>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}
export default Logout;