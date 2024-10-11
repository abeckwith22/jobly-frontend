import { useEffect, useState } from "react";
import JoblyApi from "../../api";

/* check if token exists and loads token to state that will be passed to TokenContext returns [token, setToken, loading] */
const useUserState = () => {
    const [userLoaded, setUserLoaded] = useState(false);
    const [user, setUser] = useState(null);

    // Updates user to whats latest from the database and sets that to localstorage
    const refreshUser = async () => {
        const { username } = JSON.parse(localStorage.getItem('user'));
        const refreshedUser = await JoblyApi.getUser(username);
        setUser(refreshedUser);
        localStorage.setItem('user', JSON.stringify(refreshedUser));
        return user;
    }

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('user'));
        if(localUser){
            const justDoIt = async () => {
                await refreshUser();
            }
            justDoIt();
        }

        setUserLoaded(true);
    }, []);

    return [user, setUser, userLoaded, refreshUser];
}

export default useUserState;