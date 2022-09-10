import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks";
import {
    ButtonsPagination,
    ButtoPokemonType,
    ReturnButton,
    parseDataPokemon,
    PokemonInfo,
    PokemonStats,
} from "../";

import React from "react";

const setUrlById = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

export const PokemonPage = React.memo(() => {
    const navigate = useNavigate();
    const { pokemonId = "0" } = useParams();

    const { data, error, loading, setUrl } = useFetch(setUrlById(pokemonId));

    useEffect(() => {
        setUrl(setUrlById(pokemonId));
    }, [pokemonId]);

    const pokemonIdNumber = parseInt(pokemonId);

    if (error) {
        return (
            <>
                <h1>No pokemon found</h1>
                <ReturnButton />
            </>
        );
    }

    if (loading) return <h1>Loading...</h1>;

    const { name, height, id, sprite, types, weight, abilities, stats } =
        parseDataPokemon(data);

    return (
        <>
            <br />
            <ButtonsPagination
                nextActive={pokemonIdNumber >= 10249}
                previousActive={pokemonIdNumber <= 1}
                onPrevious={() =>
                    navigate("/pokemon/" + (pokemonIdNumber - 1), {
                        replace: true,
                    })
                }
                onNext={() =>
                    navigate("/pokemon/" + (pokemonIdNumber + 1), {
                        replace: true,
                    })
                }
            />
            <div className="row mt-5">
                <div className="col-md-3 mb-4">
                    <img
                        src={sprite}
                        alt={name}
                        className="pokemon-img animate__animated animate__fadeInLeft"
                    />
                </div>

                <div className="col-md-9">
                    <h3>{name.toLocaleUpperCase()}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>#</b>
                            {id}
                        </li>
                        <li className="list-group-item">
                            <b>Height: </b>
                            {height}
                        </li>
                        <li className="list-group-item">
                            <b>Weight: </b>
                            {weight}
                        </li>
                        <li className="list-group-item">
                            <b>Types: </b>
                            {types.map((type) => (
                                <ButtoPokemonType
                                    name={type.type.name}
                                    key={type.slot}
                                />
                            ))}
                        </li>
                        <li className="list-group-item">
                            <b>Abilities: </b>
                            {abilities.map((ability) => (
                                <span key={ability.ability.name}>
                                    {ability.ability.name}{" "}
                                </span>
                            ))}
                        </li>
                        <li className="list-group-item">
                            <PokemonStats stats={stats} />
                        </li>
                        <li className="list-group-item">
                            <ReturnButton />
                        </li>
                    </ul>
                </div>
            </div>
            <br />
            <PokemonInfo id={id} />
            <br />
            <ButtonsPagination
                nextActive={pokemonIdNumber >= 10249}
                previousActive={pokemonIdNumber <= 1}
                onPrevious={() =>
                    navigate("/pokemon/" + (pokemonIdNumber - 1), {
                        replace: true,
                    })
                }
                onNext={() =>
                    navigate("/pokemon/" + (pokemonIdNumber + 1), {
                        replace: true,
                    })
                }
            />
            <br />
        </>
    );
});
