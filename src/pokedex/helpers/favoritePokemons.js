export const getFavoritePokemons = () => {
    const favoritePokemons = localStorage.getItem("favoritePokemons");
    return favoritePokemons ? JSON.parse(favoritePokemons) : [];
};

export const addFavoritePokemon = (pokemonName) => {
    const favoritePokemons = getFavoritePokemons();
    if (!favoritePokemons.includes(pokemonName)) {
        favoritePokemons.push(pokemonName);
        localStorage.setItem("favoritePokemons", JSON.stringify(favoritePokemons));
    }
};

export const removeFavoritePokemon = (pokemonName) => {
    const favoritePokemons = getFavoritePokemons();
    const index = favoritePokemons.indexOf(pokemonName);
    if (index > -1) {
        favoritePokemons.splice(index, 1);
        localStorage.setItem("favoritePokemons", JSON.stringify(favoritePokemons));
    }
};

export const isFavoritePokemon = (pokemonName) => {
    const favoritePokemons = getFavoritePokemons();
    return favoritePokemons.includes(pokemonName);
};

