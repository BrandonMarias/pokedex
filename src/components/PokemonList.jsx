import { nanoid } from "nanoid";
import { ButtonsPagination, PokemonCard } from "./";
import { usePokemonList } from "../hooks/usePokemonList";

export const PokemonList = () => {
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

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-0 my-4">
                {pokemons.map((pokemonId) => (
                    <PokemonCard key={nanoid()} pokemonId={pokemonId} />
                ))}
            </div>

            {buttonsPagination}
        </>
    );
};
