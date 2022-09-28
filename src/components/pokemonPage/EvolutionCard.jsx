import React from "react";
import { nanoid } from "nanoid";
import { PokemonCard, ArrowEvolution, LoadingCard } from "../";
import { useFetch, parseDataEvolutions } from "../../";

export const EvolutionCard = React.memo(({ url }) => {
    const { data, loading, error } = useFetch(url);

    if (loading) return <LoadingCard />;
    if (error) return <p>Evolution info no found</p>;

    const { firstEvolution, secondEvolution, thirdEvolution } =
        parseDataEvolutions(data);

    const printEvolutions = (evolutionsToPrint = []) => {
        if (evolutionsToPrint.length === 0) return null;
        return (
            <>
                <ArrowEvolution />
                {evolutionsToPrint.map(({url, evolutionDetails}) => (
                    <div className="col-sm-6 col-md-4 col-lg-3" key={nanoid()}>
                        {evolutionDetails && (
                            <p className="text-center mt-4">
                                {evolutionDetails}
                            </p>
                        )}
                        <PokemonCard pokemonUrl={url} />
                    </div>
                ))}
            </>
        );
    };

    return (
        <div className="row justify-content-center">
            {secondEvolution.length === 0 && (
                <p className="alert alert-warning">
                    This pokemon has no evolutions
                </p>
            )}
            <div className="col-md-3">
                <PokemonCard pokemonUrl={firstEvolution[0].url} />
            </div>
            {printEvolutions(secondEvolution)}
            {printEvolutions(thirdEvolution)}
        </div>
    );
});
