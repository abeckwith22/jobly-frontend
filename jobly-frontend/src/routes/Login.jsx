
import { Navigate } from "react-router-dom";
import useForm from "../hooks/useForm"
import "../styles/Form.css"

const Login = () => {

    const INITIAL_STATE = {
        "username":"",
        "password":""
    }

    const [handleChange, handleSubmit, formData] = useForm(INITIAL_STATE, "login");

    return (
        <div id="FormDiv">
            <div id="Form">
                <h3>Log in</h3>
                <form onSubmit={handleSubmit} className="FormContainer">
                    <div className="FormInput">
                        <div>
                            <label htmlFor="username">Username</label>
                        </div>
                        <input onChange={handleChange} id="username" name="username" value={formData.username} required/>
                    </div>
                    <div className="FormInput">
                        <div>
                            <label htmlFor="password">Password</label>
                        </div>
                        <input onChange={handleChange} type="password" name="password" value={formData.password} required/>
                    </div>
                    <div className="FormInput">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Login;
