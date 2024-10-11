import { Link } from "react-router-dom";
import "../styles/Company.css"

const CompanyCard = (company) => {
    return (
        <>
            <div className="Company">
                <nav className="Company Link">
                    <Link to={`${company.handle}`}><h1>{company.name}</h1></Link>
                </nav>
                {/* <h1>{name}</h1> */}
                <p><i>{company.description}</i></p>
            </div>
        </>
    );
}

export default CompanyCard;