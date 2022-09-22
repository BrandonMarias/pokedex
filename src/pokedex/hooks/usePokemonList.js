import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks";
import queryString from "query-string";
import { useEffect } from "react";

export const usePokemonList = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { offset = "0" } = queryString.parse(location.search);
    const from = Number(offset);
    const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${from}`;
    
    const { data, error, loading, setUrl } = useFetch(url);
        
    useEffect(() => {
        setUrl(url);
    }, [from])

    return { data, error, loading, from, navigate };
};
