import { useState, useEffect } from "react";
import JoblyApi from "../../api";

const useGetJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () =>{
            const data = await JoblyApi.getJobAll();
            setJobs(data);
            setIsLoading(false);
        }
        getData();
    }, []);

    return {jobs, isLoading};
}

export default useGetJobs;
