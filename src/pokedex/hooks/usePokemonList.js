import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { getPokemonsId } from "../helpers/getPokemonsId";

export const usePokemonList = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { offset = "0" } = queryString.parse(location.search);
    const from = Number(offset);

    const [{next,pokemons,previous}, setPokemonsId] = useState(getPokemonsId(from));

    useEffect(() => {
        setPokemonsId(getPokemonsId(from));
    }, [from]);

    const onNext = () => {
        navigate(`/pokemons?offset=${from + 20}`, { replace: true });
    };

    const onPrevious = () => {
        navigate(`/pokemons?offset=${from - 20}`, { replace: true });
    };

    return { pokemons, next, previous, onNext, onPrevious };
};
