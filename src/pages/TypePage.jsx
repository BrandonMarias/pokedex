import { useParams } from "react-router-dom";
import {
    DamageRelations,
    LoadingCard,
    ReturnButton,
    PokemonCard,
} from "../components";
import { useFetch } from "../hooks";
import { pokeTypes } from "../data";
import { useEffect } from "react";

export const TypePage = () => {
    const { type } = useParams();
    const { data, loading, error, setUrl } = useFetch(
        `https://pokeapi.co/api/v2/type/${type}`
    );

    useEffect(() => {
        setUrl(`https://pokeapi.co/api/v2/type/${type}`);
    }, [type]);

    if (loading) return <LoadingCard />;
    if (error) return <h1>404</h1>;
    console.log(data);

    const { img, color } = pokeTypes.find(({ name }) => name === type);
    const { damage_relations, pokemon } = data;
    const style = {
        backgroundColor: color,
        color: "white",
        padding: "1rem",
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        borderRadius: "1rem",
        marginBottom: "1rem",
        boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    };
    return (
        <div className="container animate__animated animate__fadeIn">
            <div className="mt-3 ">
                <ReturnButton />
            </div>
            <div className="row mt-3">
                <div className="col-12 text-center border mb-4" style={style}>
                    <img
                        src={img}
                        alt={type}
                        className="img-fluid"
                        width={200}
                    />
                    <h1 className="capitalize">{type}</h1>
                </div>
            </div>
            <h3 className="text-center">Damage relations</h3>
            <hr />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 my-4 g-3 align-items-stretch">
                <DamageRelations damage_relations={damage_relations} />
            </div>

            <h3 className="text-center">Pokemons</h3>
            <hr />

            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3 align-items-stretch">
                {pokemon.map(({ pokemon }) => (
                    <div className="col" key={pokemon.name}>
                        <PokemonCard pokemonUrl={pokemon.url} />
                    </div>
                ))}
            </div>
        </div>
    );
};
