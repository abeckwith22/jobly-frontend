import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../helpers/UserContext";
import { TokenContext } from "../helpers/TokenContext";
import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "../helpers/AuthContext";

const Logout = () => {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);
    const [token, setToken] = useContext(TokenContext);
    const [user, setUser] = useContext(UserContext);

    useEffect(()=> {

        // console.debug("Clearing token");
        setToken(null);

        // console.debug("Clearing current user");
        setUser({});

        // console.debug("Clearing localstorage");
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        logout(); // sets IsAuthorized to false
        console.debug("User successfully logged out! Navigating to '/'");

        return navigate('/');
    }, []);

    // return <Navigate to={'/'}/>
}

export default Logout;