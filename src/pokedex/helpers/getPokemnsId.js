export const getPokemonsId = (offset = 0, limit = 20) => {
    const pokemonsCount = 898;
    const pokemons = []
    const next = offset + limit < pokemonsCount ? offset + limit : null;
    const previous = offset - limit >= 0 ? offset - limit : null;
    for (let index = offset; index < offset+limit; index++) {
        if (index < pokemonsCount) {
            pokemons.push(index)
        }
    }
    return {pokemons, next, previous}
};