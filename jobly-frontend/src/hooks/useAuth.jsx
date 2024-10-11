import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import JoblyApi from "../../api";

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const checkLocalStorage = async () => {
        const localToken = localStorage.getItem('token');
        if(localToken){
            const { username } = jwtDecode(localToken);
            JoblyApi.setToken(localToken); // loads JoblyApi token to check for user validity
            const user = await JoblyApi.getUser(username);
            if(!user.status){
                login();
            }
        }
    }

    useEffect(() => {
        const authUser = async () => {
            await checkLocalStorage();
            setIsLoaded(true);
        }
        authUser();
    }, []);

    const login = () => {
        // console.debug('setting authenticated to true');
        setIsAuthenticated(true);
    };
    const logout = () => {
        // console.debug('setting authenticated to false');
        setIsAuthenticated(false);
    }
    // console.log('AuthProvider isUserAuthenticated?:', isAuthenticated);
    // console.log(isAuthenticated);

    return { isAuthenticated, isLoaded, login, logout };
}
