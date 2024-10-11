import { useState, useEffect } from "react";
import JoblyApi from "../../api";

const useGetCompany = (handle) => {
    if(!handle){
        return null;
    }

    const [companyData, setCompany] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getCompany = async () =>{
            const company_data = await JoblyApi.getCompany(handle);
            setCompany(company_data);
            setIsLoading(false);
        }
        getCompany();
    }, []);

    return { companyData, isLoading };
}

export default useGetCompany;
