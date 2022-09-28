import { PokemonCard } from "../PokemonCard";
import { nanoid } from "nanoid";

export const PokemonsVarieties = ({ variesties = [] }) => {
    return (
        <div className="row justify-content-center">
            {variesties.map(({ pokemon }) => (
                <div className="col-sm-6 col-md-4 col-lg-3" key={nanoid()}>
                    <PokemonCard pokemonUrl={pokemon.url} />
                </div>
            ))}
        </div>
    );
};
