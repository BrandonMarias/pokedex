import React from "react";
import { ButtonsPagination, PokemonDetails, LoadingCard } from "../";
import { AddFavoritePokemon, ReturnButton, PokemonInfo } from "../";
import { usePokemonPage, parseDataPokemon, PokemonImg } from "../";

export const PokemonPage = React.memo(() => {
    const { data, error, loading, pokemonIdNumber, next, previous } = usePokemonPage();

    if (error) return <h1>No pokemon found</h1>;
    if (loading) return <LoadingCard />;

    const dataPokemon = parseDataPokemon(data);
    const isVariety = pokemonIdNumber >= 10000;

    const buttonsPagination = !isVariety && (
        <ButtonsPagination
            nextActive={pokemonIdNumber >= 1010}
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
                <AddFavoritePokemon pokemonId={dataPokemon.id} />
            </div>
            <div className="row mt-5">
                <PokemonImg {...dataPokemon} />
                <PokemonDetails {...dataPokemon} />
            </div>
            <br />
            <PokemonInfo pokemonSpeciesUrl={dataPokemon.pokemonSpeciesUrl} />
            <br />
            {buttonsPagination}
            <br />
        </>
    );
});
