import { Link } from "react-router-dom";
import "../styles/JobCard.css"

const JobCard = (job) => {
    return (
        <>
            <div className="JobCard">
                <div className="JobCard-Links">
                    <nav className="JobLink">
                        <Link to={`/jobs/${job.id}`}><h1>{job.title}</h1></Link>
                    </nav>
                    { job.company_handle ? 
                        <nav className="CompanyLink">
                            <Link to={`/companies/${job.company_handle}`}><h3><i>@ {job.company_name}</i></h3></Link>
                        </nav>
                    : ""}
                </div>
                {job.salary ? <p><i>Salary: {job.salary}</i></p> : ""}
                {job.equity > 0 ? <p><i>Equity: {job.equity}</i></p> : ""}
            </div>
        </>
    )
}

export default JobCard;
            