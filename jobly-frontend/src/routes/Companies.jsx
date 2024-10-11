import useGetCompanies from "../hooks/useGetCompanies";
import { useSearchParams, Form } from "react-router-dom";
import "../styles/Companies.css"

import Company from "./CompanyCard";

const Companies = () => {
    let data = useSearchParams();
    let name = data[0].get('name') || "";
    const {companies, isLoading} = useGetCompanies(name);

    if(isLoading){
        return <h1>Loading...</h1>
    }

    return (
        <>
            <div className="Companies">
                <ul className="CompaniesList">
                    <Form>
                        {/* <label htmlFor="nameLike">Filter</label> */}
                        <input id="nameInput" name="name" placeholder="Enter search term..."/>
                        <button>Submit</button>
                    </Form>
                    {companies.map(company => <li key={company.handle}>
                        <Company key={company.handle} handle={company.handle} name={company.name} description={company.description} />
                    </li>)}
                </ul>
            </div>
        </>
    )
}

export default Companies;
