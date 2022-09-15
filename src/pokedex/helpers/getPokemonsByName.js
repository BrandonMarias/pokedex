export const getPokemonsByName = (name = "", pokemons = []) => {
    name = name.toLocaleLowerCase().trim();
    if (name === "") return [];
    return pokemons.filter((pokemon) =>
        pokemon.name.toLocaleLowerCase().includes(name)
    );
};
