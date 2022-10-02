import { nanoid } from "nanoid";
import { getFavoritePokemons, PokemonCard } from "../";

export const FavoritePage = () => {
    const favoritePokemons = getFavoritePokemons();
    return (
        <>
            <h1 className="mt-4">Favorite Pokemons</h1>
            <hr />
            {favoritePokemons.length === 0 && (
                <h2>There are no favorite pokemons</h2>
            )}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3 align-items-stretch my-4">
                {favoritePokemons.map((pokemonName) => (
                    <div className="col">
                        <PokemonCard
                            key={nanoid()}
                            pokemonUrl={`https://pokeapi.co/api/v2/pokemon/${pokemonName}`}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};
