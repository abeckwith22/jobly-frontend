import { Outlet, Route, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useContext, useEffect } from "react";
import { AuthContext } from "../helpers/AuthContext";

const ProtectedRouteWrapper = () => {
    const { isAuthenticated, isLoaded } = useContext(AuthContext);
    const loggedIn = isAuthenticated;

    if(!isLoaded){
        return;
    }

    if(loggedIn){
        return (
            <Outlet/>
        )
    }else{
        return <Navigate to={'/login'}/>
    }
}

export default ProtectedRouteWrapper;
