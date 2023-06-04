import { useFetch } from "../../hooks";
import { pokemonCount } from "../../settings/pokemonCount";

export const DataListPokemons = () => {
    const { data,error,loading} = useFetch("https://pokeapi.co/api/v2/pokemon?limit="+ pokemonCount);

    if(loading || error) return null;

    return (
        <datalist id="searchPokemons">
            {data.results.map(({name}) => (
                <option key={name} value={name} />
            ))}
        </datalist>
    );
};
