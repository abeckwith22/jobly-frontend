import NavBarWrapper from "../components/NavBarWrapper";
import { Outlet } from "react-router-dom";
import useUserState from "../hooks/useUserState";
import useTokenState from "../hooks/useTokenState";
import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "../helpers/AuthContext";
import { TokenContext } from "../helpers/TokenContext";
import { UserContext } from "../helpers/UserContext";

const App = () => {
    const {isAuthenticated, isLoaded, login, logout} = useAuth();
    const [token, setToken, tokenLoaded] = useTokenState();
    const [user, setUser, userLoaded] = useUserState();

    return (
        <>
            <AuthContext.Provider value={{isAuthenticated, isLoaded, login, logout}}>
                <TokenContext.Provider value={[token, setToken]}>
                        <UserContext.Provider value={[user, setUser, userLoaded]}>
                            <div id="App">
                                <NavBarWrapper/>
                                <Outlet />
                            </div>
                        </UserContext.Provider>
                </TokenContext.Provider>
            </AuthContext.Provider>
        </>
    )
}

export default App;
