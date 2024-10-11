import { redirect } from "react-router-dom";
import JoblyApi from "../../api";
import { jwtDecode } from "jwt-decode";

class Helper {
    /* */
    static async signUpUser(user){
        try {
            const token = await JoblyApi.registerUser(user);
            return token;
        } catch(err){
            console.log(err);
            return redirect('/');
        }
    }

    /* requests jobly api to gather userData { username, password } => { token } */
    static async loginUser(user) {
        try{
            const token = await JoblyApi.getToken(user);
            return token;
        }catch(err){
            console.log(err)
            return redirect('/');
        }
    }

    static async patchUser(user, username) {
        try {
            const obj = {};
            Object.keys(user).map(key => user[key] ? obj[key] = user[key] : "");
            const newUser = await JoblyApi.patchUser(username, obj);
            return newUser;
        }catch(err){
            console.log(err)
            return redirect('/');
        }
    }

    /** simple decoder function to grab username from users token */
    static decodeToken(token) {
        let { username } = jwtDecode(token);
        return username;
    }

    static getLocalUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

}

export default Helper;
