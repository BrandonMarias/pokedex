import { nanoid } from "nanoid";
import React from "react";
import { ButtonsPagination, PokemonCard } from "./";
import { usePokemonList } from "../hooks/usePokemonList";

export const PokemonList = React.memo(() => {
    const { next, onNext, onPrevious, pokemons, previous } = usePokemonList();

    const buttonsPagination = (
        <ButtonsPagination
            nextActive={!next}
            previousActive={!previous}
            onNext={onNext}
            onPrevious={onPrevious}
        />
    );

    return (
        <>
            {buttonsPagination}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3 align-items-stretch my-4">
                {pokemons.map((pokemonId) => (
                    <div className="col">
                        <PokemonCard key={nanoid()} pokemonId={pokemonId} />
                    </div>
                ))}
            </div>

            {buttonsPagination}
        </>
    );
});
