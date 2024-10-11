import { useState, useEffect, useContext } from "react"
import { useActionData, useParams } from "react-router-dom";
import JoblyApi from "../../api";
import Helper from "../helpers/Helper";


import "../styles/JobDetails.css";
import { TokenContext } from "../helpers/TokenContext";
import { jwtDecode } from "jwt-decode";
import { UserContext } from "../helpers/UserContext";

const JobDetails = () => {
    const [job, setJob] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useContext(TokenContext);
    // const [user, refreshUser] = useContext(UserContext);
    const [isApplied, setIsApplied] = useState(false);
    // const [user, setUser, userLoaded, refreshUser] = useContext(UserContext);
    const { id } = useParams(); // please work :)
    
    useEffect(() => {
        const getJob = async () => {
            let data = await JoblyApi.getJob(id);
            setJob(data);
            const user = Helper.getLocalUser();

            // if job_id in applications set isApplied to true
            // console.log(`Does ${user.applications} include ${id}?: ${user.applications.includes(+id)}`);
            // console.log(user.applications);
            if(user.applications.includes(+id)){
                setIsApplied(true);
            }
            setIsLoading(false);
        }
        getJob();
    }, []);
    
    
    if(isLoading){
        return <h1>Loading...</h1>
    }
    
    // TODO: Figure out why refreshing the user isn't working (utilizes `useUserState`)
    const applyForJob = async e => {
        const { username } = jwtDecode(token);
        e.preventDefault();
        console.log(`Username: ${username}`);
        console.log(`Job_id: ${id}`);
        try{
            const job = await JoblyApi.userApplyForJob(username, id);
            console.log(`User (${username}) applied for a job (id: ${id})!`);
            setIsApplied(true);
            // console.log("refreshing user")
            // const new_user = await refreshUser();
            // console.log("user refreshed!")
            // console.log(job);
            return job;
        }catch(err){
            console.error(err);
        }
    }

    return (
        <>
            <div className="JobDetails">
                <ul className="JobDetails-info">
                    <h1>Title: {job.title}</h1>
                    { job.salary ? <h3>Salary: {job.salary}</h3> : "" }
                    { job.equity > 0 ? <h3>Equity: {job.equity}</h3> : "" }
                </ul>
                <form className="JobDetails-Form">
                    { !isApplied ? 
                        <button className="JobDetails-Form-Button" onClick={applyForJob} id="JobDetails-Form-btn">Apply</button>
                        :
                        <button className="JobDetails-Form-Button .applied" id="JobDetails-Form-btn-applied"><i>Applied!</i></button>
                    }
                </form>
            </div>
            <div className="JobDetails-Company">
            </div>
        </>
    )
}

export default JobDetails;
