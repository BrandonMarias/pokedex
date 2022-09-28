export const getFavoritePokemons = () => {
    const favoritePokemons = localStorage.getItem("pokemonsId");
    return favoritePokemons ? JSON.parse(favoritePokemons) : [];
};

export const addFavoritePokemon = (pokemonId) => {
    const favoritePokemons = getFavoritePokemons();
    if (!favoritePokemons.includes(pokemonId)) {
        favoritePokemons.push(pokemonId);
        localStorage.setItem("pokemonsId", JSON.stringify(favoritePokemons));
    }
};

export const removeFavoritePokemon = (pokemonId) => {
    const favoritePokemons = getFavoritePokemons();
    const index = favoritePokemons.indexOf(pokemonId);
    if (index > -1) {
        favoritePokemons.splice(index, 1);
        localStorage.setItem("pokemonsId", JSON.stringify(favoritePokemons));
    }
};

export const isFavoritePokemon = (pokemonId) => {
    const favoritePokemons = getFavoritePokemons();
    return favoritePokemons.includes(pokemonId);
};

