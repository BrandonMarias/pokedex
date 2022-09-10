import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useFetch } from "../../hooks";
import { ButtonsPagination, PokemonCard } from "./";
import queryString from "query-string";

const dataFormat = { next: "", previous: "", results: [] };

export const PokemonList = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { offset = "0" } = queryString.parse(location.search);
    const from = Number(offset);
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${from}&limit=20`;
    
    const { data, error, loading, setUrl } = useFetch(url);
    const { next, previous, results } = data || dataFormat;
    
    if (isNaN(from) || from < 0) {
        navigate("/pokemons");
        return null;
    }
    
    useEffect(() => {
        setUrl(url);
    }, [from])
    
    
    const onPrevious = () => {
        const offset = from - 20;
        navigate(`/pokemons?offset=${offset}`);
    };
    
    const onNext = () => {
        const offset = from + 20;
        navigate(`/pokemons?offset=${offset}`);
    };
    
    if (error) return <h1>error</h1>;

    return (
        <>
            
            <ButtonsPagination
                nextActive={!next}
                previousActive={!previous}
                onNext={onNext}
                onPrevious={onPrevious}
            />

            <div className="row row-cols-1 row-cols-md-3 g-3 my-4 row-cols-sm-2 row-cols-lg-4">
                {results.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>

            <ButtonsPagination
                nextActive={!next}
                previousActive={!previous}
                onNext={onNext}
                onPrevious={onPrevious}
            />
        </>
    );
};
