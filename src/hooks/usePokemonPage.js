import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from ".";

const setUrlById = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;
export const usePokemonPage = () => {
    const navigate = useNavigate();
    const { pokemonId = "0" } = useParams();

    const { data, error, loading, setUrl } = useFetch(setUrlById(pokemonId));

    useEffect(() => {
        setUrl(setUrlById(pokemonId));
    }, [pokemonId]);

    const pokemonIdNumber = Number(pokemonId);

    const next = () => {
        navigate(`/pokemons/${pokemonIdNumber + 1}`, { replace: true });
    };

    const previous = () => {
        navigate(`/pokemons/${pokemonIdNumber - 1}`, { replace: true });
    };

    return { data, error, loading, pokemonIdNumber, navigate, next, previous };
};
