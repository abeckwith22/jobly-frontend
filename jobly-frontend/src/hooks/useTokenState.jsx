import { useContext, useEffect, useState } from "react";
import JoblyApi from "../../api";
import { AuthContext } from "../helpers/AuthContext";
import { jwtDecode } from "jwt-decode";


/* check if token exists and loads token to state that will be passed to TokenContext returns [token, setToken, loading] */
const useTokenState = () => {
    const [tokenLoaded, setTokenLoaded] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        if(localStorage.getItem('token')){
            const localToken = localStorage.getItem('token');
    
            // set TokenContext and JoblyApi
            JoblyApi.setToken(localToken);

            setToken(localToken);
            setTokenLoaded(true);
        }
    }, []);

    return [token, setToken, tokenLoaded];
}

export default useTokenState;