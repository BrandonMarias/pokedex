import { pokemonCount } from "../settings/pokemonCount";

export const getPokemonsId = (offset = 0, limit = 20) => {
    const pokemonsCount = pokemonCount;
    const pokemons = [];
    const next = offset + limit < pokemonsCount;
    const previous = offset - limit >= 0;
    for (let index = offset + 1; index < offset + limit + 1; index++) {
        if (index <= pokemonsCount) {
            pokemons.push(index);
        }
    }
    return { pokemons, next, previous };
};
