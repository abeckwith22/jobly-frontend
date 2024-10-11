import { useState, useEffect } from "react";
import JoblyApi from "../../api";

const useGetCompanies = (name="") => {
    const [companies, setCompanies] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getCompanies = async () => {
            const companies_data = await JoblyApi.getCompanyAll(name);

            setCompanies(companies_data);
            setIsLoading(false);
        }
        getCompanies();
    }, [name])

    return {companies, isLoading};
}

export default useGetCompanies;
