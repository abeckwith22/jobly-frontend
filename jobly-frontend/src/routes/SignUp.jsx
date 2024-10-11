import "../styles/Form.css"
import useForm from "../hooks/useForm";
import { useAuth } from "../hooks/useAuth"; 
import { useContext } from "react";
import { AuthContext } from "../helpers/AuthContext";

const SignUp = () => {
    const INITIAL_STATE = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
    }

    const [handleChange, handleSubmit, formData, validated] = useForm(INITIAL_STATE, "signup");

    return (
        <div id="FormDiv">
            <div id="Form">
                <h3>Sign Up</h3>
                <form onSubmit={handleSubmit} className="FormContainer" >
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
                        <div>
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <input onChange={handleChange} id="firstName" name="firstName" value={formData.firstName} required/>
                    </div>
                    <div className="FormInput">
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <input onChange={handleChange} id="lastName" name="lastName" value={formData.lastName} required/>
                    </div>
                    <div className="FormInput">
                        <div>
                            <label htmlFor="email">Email</label>
                        </div>
                        <input onChange={handleChange} type="email" id="email" name="email" value={formData.email} required/>
                    </div>
                    <div className="FormInput">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default SignUp;
