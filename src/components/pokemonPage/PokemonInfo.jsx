import { useFetch, parseDataPokemonSpecies, InfoIcon, LoadingCard} from "../../";
import { EvolutionCard, PokemonsVarieties } from "./";

export const PokemonInfo = ({ pokemonSpeciesUrl }) => {
    const { data, loading, error } = useFetch(pokemonSpeciesUrl);

    if (loading) return <LoadingCard />;
    if (error) return <p>Error</p>;

    const {
        biography,
        urlEvolutions,
        isBaby,
        isLegendary,
        isMythical,
        varieties = [],
    } = parseDataPokemonSpecies(data);

    const hasVarieties = varieties.length > 0;

    return (
        <div className="row justify-content-center">
            <div className="col-md-5 mb-3 mt-5 text-center justify-content-center">
                <h4>Biography</h4>
                <hr />
                <p className="lead">{biography.replace("", " ")}</p>{" "}
                {/*  is a weird character */}
            </div>

            {isLegendary && (
                <p className="alert alert-info">
                    {" "}
                    <InfoIcon />
                    This pokemon is legendary
                </p>
            )}

            {isMythical && (
                <p className="alert alert-info">
                    {" "}
                    <InfoIcon />
                    This pokemon is mythical
                </p>
            )}

            {isBaby && (
                <p className="alert alert-info">
                    {" "}
                    <InfoIcon />
                    This pokemon is baby
                </p>
            )}

            <div className="col-md-12 mt-4">
                <h3 className="text-center">Evolutions</h3>
                <hr />
                <EvolutionCard url={urlEvolutions} />
            </div>

            {hasVarieties && (
                <div className="col-md-12 mt-4">
                    <h3 className="text-center">Varieties</h3>
                    <hr />
                    <PokemonsVarieties variesties={varieties} />
                </div>
            )}
        </div>
    );
};
