import {useState, useEffect} from "react";

// Challenge used on Dio.me Bootcamp
export const UseFetch = ({url}) => {
    const [urlResult, setUrlResult] = useState('');

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setUrlResult(data))
        .catch(console.error);
    }, [url])
    return urlResult;
}

export default UseFetch;