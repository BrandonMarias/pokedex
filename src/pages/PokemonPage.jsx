import React from "react";
import { ButtonsPagination, PokemonDetails, LoadingCard } from "../";
import { AddFavoritePokemon, ReturnButton, PokemonInfo } from "../";
import { usePokemonPage, parseDataPokemon, PokemonImg } from "../";

export const PokemonPage = React.memo(() => {
    const { data, error, loading, pokemonIdNumber, next, previous } =
        usePokemonPage();

    if (error) return <h1>No pokemon found</h1>;
    if (loading) return <LoadingCard />;

    const {
        name,
        height,
        id,
        types,
        weight,
        abilities,
        stats,
        shinySprite,
        sprite,
        pokemonSpeciesUrl,
    } = parseDataPokemon(data);

    const isVariety = pokemonIdNumber >= 10000;

    const buttonsPagination = !isVariety && (
        <ButtonsPagination
            nextActive={pokemonIdNumber >= 905}
            previousActive={pokemonIdNumber <= 1}
            onPrevious={() => previous()}
            onNext={() => next()}
        />
    );

    return (
        <>
            <br />
            <div className="d-flex justify-content-between align-items-center mx-3">
                <ReturnButton />
                <AddFavoritePokemon pokemonId={id} />
            </div>
            <div className="row mt-5">
                <PokemonImg
                    shinySprite={shinySprite}
                    sprite={sprite}
                    name={name}
                />

                <PokemonDetails
                    {...{ name, height, weight, types, abilities, stats, id }}
                />
            </div>
            <br />
            <PokemonInfo pokemonSpeciesUrl={pokemonSpeciesUrl} />
            <br />
            {buttonsPagination}
            <br />
        </>
    );
});
