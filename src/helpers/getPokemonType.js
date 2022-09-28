import {pokeTypes} from "../data/pokeTypes";

export const getPokemonType = (type) => {
    return pokeTypes.find((pokeType) => pokeType.name === type);
};
