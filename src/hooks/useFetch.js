import { useEffect, useState } from "react";

export const useFetch = (urlArg) => {
    const [url, setUrl] = useState(urlArg);
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
        setUrl,
    });

    const fetchData = async () => {
        setState({ ...state, loading: true });
        try {
            const response = await fetch(url);
            const data = await response.json();
            setState({ data, loading: false, error: null });
        } catch (error) {
            setState({ data: null, loading: false, error });
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { ...state, setUrl };
};
