import {
    ButtonsPagination,
    parseDataPokemon,
    PokemonInfo,
    PokemonDetails,
    LoadingCard,
    usePokemonPage,
    ReturnButton
} from "../";
import { AddFavoritePokemon } from "../components/AddFavoritePokemon";

export const PokemonPage = () => {
    const { data, error, loading, pokemonIdNumber, next, previous } =
        usePokemonPage();

    if (error) return <h1>No pokemon found</h1>;
    if (loading) return <LoadingCard />;

    const { name, height, id, sprite, types, weight, abilities, stats } =
        parseDataPokemon(data);

    const buttonsPagination = (
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
                <AddFavoritePokemon pokemonName={name}/>
            </div>
            <div className="row mt-5">
                <div className="col-xl-3 mb-4">
                    <img
                        src={sprite}
                        alt={name}
                        className="animate__animated animate__fadeInLeft pokemon-page__img"
                    />
                </div>

                <PokemonDetails
                    {...{ name, height, weight, types, abilities, stats, id }}
                />
            </div>
            <br />
            <PokemonInfo id={id} />
            <br />
            {buttonsPagination}
            <br />
        </>
    );
};
