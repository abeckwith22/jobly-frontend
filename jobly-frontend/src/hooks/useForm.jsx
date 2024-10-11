import { useContext, useState } from "react";
import Helper from "../helpers/Helper";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../helpers/TokenContext";
import JoblyApi from "../../api";
import { UserContext } from "../helpers/UserContext";
import { AuthContext } from "../helpers/AuthContext";

const useForm = (INITIAL_STATE={}, type=null) => {
    const [token, setToken] = useContext(TokenContext);
    const [user, setUser] = useContext(UserContext);
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState(INITIAL_STATE);
    const navigate = useNavigate();

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]:value,
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        // decoding username
        if(type === "editProfile"){
            const username = Helper.decodeToken(token);
            // console.debug(username);
            const new_user = await Helper.patchUser(formData, username);
            localStorage.setItem("user", JSON.stringify(new_user));
            setUser(new_user);
            // console.debug(new_user);
        }
        else { // assume login or signup
            let new_token;
            if(type === "login"){
                new_token = await Helper.loginUser(formData);
            }
            else if(type === "signup"){
                new_token = await Helper.signUpUser(formData);
            }
    
            if(!new_token.status){ 
                // Sets JoblyApi token to our new_token; saves token to localStorage and our context
                JoblyApi.setToken(new_token); // believe this works 
                localStorage.setItem("token", new_token); // adds new token to localstorage
                setToken(new_token);
                
                // sets UserContext to JoblyApi and saves user information to localStorage
                const new_user = await JoblyApi.getUser(Helper.decodeToken(new_token));
                setUser(new_user);
                localStorage.setItem("user", JSON.stringify(new_user));
                login();
            }
        }

        // to fix: this useForm hook
        const patchSubmit = async e => {

        }

        const loginSubmit = async e => {

        }

        const signUpSubmit = {

        }
        return navigate('/')
    }

    return [handleChange, handleSubmit, formData];
}

export default useForm;