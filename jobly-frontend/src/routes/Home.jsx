import { Link, redirect } from "react-router-dom";
import { useContext } from "react";
import { TokenContext } from "../helpers/TokenContext";
import { jwtDecode } from "jwt-decode";
import "../styles/Home.css"

const Home = () => {
    const [token, setToken] = useContext(TokenContext);
    let userData = {};

    const loadToken = () => {
        const { username } = jwtDecode(token)
        userData['username'] = username;
    }

    if(token){
        loadToken();
    }

    return (
        <>
            { token ? 
                <div className="Home">
                    <div className="HomeWithUser">
                        <h1 id="logo">Jobly</h1>
                        <p>Welcome</p>
                        <div className="HomeWithUser div">
                            {userData.username}!
                        </div>
                    </div>
                </div>
                :
                <div className="Home">
                    <h1 id="logo">Jobly</h1>
                    <p>All the jobs in one, convenient place.</p>
                    <div>
                        <nav>
                            <Link className="Home Form-btn" to="/login">Log in</Link>
                            <Link className="Home Form-btn" to="/signup">Sign up</Link>
                        </nav>
                    </div>
                </div>
            }
        </>
    );
}

export default Home;