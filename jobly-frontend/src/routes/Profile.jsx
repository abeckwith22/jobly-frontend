import "../styles/Profile.css"
import useForm from "../hooks/useForm";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../helpers/UserContext";

const Profile = () => {
    const [ user, setUser, userLoaded] = useContext(UserContext);

    // console.log("Is user loaded?", userLoaded);

    const INITIAL_STATE = {
        "password": "",
        "firstName":"",
        "lastName":"",
        "email":"",
    }

    const [handleChange, handleSubmit, formData] = useForm(INITIAL_STATE, "editProfile");

    if(!userLoaded){
        return <h1>Loading...</h1>;
    }
    
    console.log(user);

    return (
        <div id="FormDiv">
            <div id="Form">
                <h3>Profile</h3>
                <form onSubmit={handleSubmit} className="FormContainer" method="PATCH">
                    <div className="FormInput">
                        <div>
                            <label htmlFor="username">Username</label>
                        </div>
                        <input className="profileInput" id="profileUsername" placeholder={user.username} value={formData.username} name="username" readOnly/>
                    </div>
                    <div className="FormInput">
                        <div>
                            <label htmlFor="password">Password</label>
                        </div>
                        <input onChange={handleChange} className="profileInput" placeholder="**********" type="profilePassword" name="password" />
                    </div>
                    <div className="FormInput">
                        <div>
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <input onChange={handleChange} className="profileInput" placeholder={user.firstName} id="profileFirstName" name="firstName" value={formData.firstName} />
                    </div>
                    <div className="FormInput">
                        <div>
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                        <input onChange={handleChange} className="profileInput" placeholder={user.lastName} id="profileLastName" name="lastName" value={formData.lastName} />
                    </div>
                    <div className="FormInput">
                        <div>
                            <label htmlFor="email">Email</label>
                        </div>
                        <input onChange={handleChange} className="profileInput" placeholder={user.email} type="email" id="profileEmail" name="email" value={formData.email} />
                    </div>
                    <div className="FormInput">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Profile;
