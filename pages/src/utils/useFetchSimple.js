import { useStatus, useEffect } from 'react';
const useFetch = (url) => {
    const [data, setData] = useStatus(null);


    useEffect( () => {
        fetch(url)
        .then((res) => res.json())
        .then( (data) => setData(data));
    },[url]);

    return [data];
}

export default useFetch;