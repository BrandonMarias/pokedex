import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useFetch } from "../../hooks";
import { LoadingCard, PokemonCard, getPokemonsByName} from "..";
import { nanoid } from "nanoid";

const url = "https://pokeapi.co/api/v2/pokemon?limit=898&offset=0";
export const SearchPage = () => {
    const location = useLocation();
    const { q = "" } = queryString.parse(location.search);
    const { data, error, loading } = useFetch(url);

    if (error) return <h1>Error</h1>;
    if (loading) return <LoadingCard />;

    const pokemons = getPokemonsByName(q, data.results);

    if (q === "") {
        return (
            <div className="alert alert-info animate__animated animate__fadeIn mt-3">
                Search a pokemon
            </div>
        );
    }
    if (pokemons.length === 0) {
        return (
            <div className="alert alert-danger animate__animated animate__fadeIn mt-3">
                There is no a pokemon with {q}
            </div>
        );
    }

    return (
        <>
            <h1 className="mt-4">Results for {q}</h1>
            <hr />

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-0 my-4">
                {pokemons.map((pokemon) => (
                    <PokemonCard key={nanoid()} pokemon={pokemon} />
                ))}
            </div>
        </>
    );
};
