import React from "react";
import { useFetch } from "../../hooks";
import { parseDataPokemonSpecies } from "../helpers";
import { EvolutionCard } from "./EvolutionCard";

export const PokemonInfo = React.memo(({ id }) => {
    const { data, loading, error } = useFetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    const { biography = "", urlEvolutions } = parseDataPokemonSpecies(data);

    return (
        <div className="row">
            <div className="col-md-5">
                <h4>Biography</h4>
                <hr />
                <p className="lead">{biography.replace("", " ")}</p> {/*  is a weird character */}
            </div>

            <div className="col-md-12 mt-4">
                <h4>Evolutions</h4>
                <hr />
                <EvolutionCard url={urlEvolutions} />
            </div>
        </div>
    );
});
