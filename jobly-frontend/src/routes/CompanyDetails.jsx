import { useParams } from "react-router-dom";
import JobCard from "./JobCard";
import useGetCompany from "../hooks/useGetCompany";

import "../styles/CompanyDetails.css";

const CompanyDetails = () => {
    const { handle } = useParams();
    const { companyData, isLoading } = useGetCompany(handle);

    if(isLoading){
        return <h1>Loading...</h1>
    }

    return (
        <>
            <div className="CompanyDetails">
                <div className="Company-div">
                    <h1>{companyData.name}</h1>
                    <p><i>{companyData.description}</i></p>
                    { companyData.numEmployees ? <p>Number of Employees: {companyData.numEmployees}</p> : "" }

                </div>
                <div className="JobList">
                    <div className="JobListDiv">
                        <h2>Jobs provided by {companyData.name}</h2>
                        <ul>
                            {companyData.jobs.map((job) => (
                                <li key={job.id} className="Job">
                                    <JobCard key={job.id} id={job.id} title={job.title} salary={job.salary} equity={job.equity} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyDetails;