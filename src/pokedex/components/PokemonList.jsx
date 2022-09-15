import { ButtonsPagination, PokemonCard, LoadingCard } from "./";
import { usePokemonList } from "../hooks/usePokemonList";

export const PokemonList = () => {
    const { data, error, from, loading, navigate } = usePokemonList();

    if (loading) return <LoadingCard />;

    if (error) return <h1>error</h1>; //todo Return to home

    const { next, previous, results } = data;

    const buttonsPagination = (
        <ButtonsPagination
            nextActive={!next}
            previousActive={!previous}
            onNext={() => navigate(`/pokemons?offset=${from + 20}`)}
            onPrevious={() => navigate(`/pokemons?offset=${from - 20}`)}
        />
    );

    return (
        <>
            {buttonsPagination}

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-0 my-4">
                {results.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>

            {buttonsPagination}
        </>
    );
};
