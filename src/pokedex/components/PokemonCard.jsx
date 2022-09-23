import { Link } from "react-router-dom";
import { useFetch } from "../../hooks";
import {
    getPokemonType,
    parseDataPokemon,
    ButtoPokemonType,
    LoadingCard,
} from "../";

export const PokemonCard = ({ pokemonId, pokemonUrl }) => {
    const url = pokemonUrl || `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const { data, error, loading } = useFetch(url);

    if (error) return <h1>error</h1>;
    if (loading) return <LoadingCard />;

    const { name, height, id, sprite, types, weight } = parseDataPokemon(data);

    const style = {
        borderColor: getPokemonType(types[0].type.name).color,
        borderWidth: "2px",
        backgroundColor: getPokemonType(types[0].type.name).colorHover,
    };

    return (
        <div className="col animate__animated animate__fadeIn pokemon-card">
            <div className="card m-3 m-md-2" style={style}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <div className="img-container">
                            <img
                                loading="lazy"
                                src={sprite}
                                className="img-fluid rounded-start pokemon-img"
                                alt={name}
                            />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body d-flex flex-column h-100 bg-white">
                            <div className="mb-auto ">
                                <h5 className="card-title">
                                    {name.toLocaleUpperCase()}
                                </h5>
                                <p className="card-text">Height: {height}</p>
                                <p className="card-text">Weight: {weight}</p>
                                <p className="card-text">
                                    <small className="text-muted">#{id}</small>
                                </p>

                                {types.map((type) => (
                                    <ButtoPokemonType
                                        name={type.type.name}
                                        key={type.slot}
                                    />
                                ))}
                            </div>
                            <div className="mt-2">
                                <Link
                                    className="btn btn-outline-primary"
                                    to={`/pokemon/${id}`}
                                >
                                    More...
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
