import JobCard from "./JobCard"
import useGetJobs from "../hooks/useGetJobs";

import "../styles/Jobs.css";

const Jobs = () => {
    const {jobs, isLoading} = useGetJobs();

    if(isLoading){
        return <h1>Loading...</h1>
    }

    return (
        <div className="Jobs">
            <ul className="JobsList">
                {jobs.map((job) => (
                    <li key={job.id}>
                        <JobCard id={job.id} title={job.title} company_name={job.companyName} company_handle={job.companyHandle} salary={job.salary} equity={job.equity}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Jobs;
