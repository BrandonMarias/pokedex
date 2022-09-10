export const parseDataPokemon = (data) => {
    return {
        id: data.id || 0,
        name: data.name || "",
        sprite:
            data.sprites.other.dream_world.front_default ||
            data.sprites.other.home.front_default ||
            data.sprites.front_default ||
            "/assets/img/no-image.svg",
        types: data.types || [],
        height: data.height || 0,
        weight: data.weight || 0,
        abilities: data.abilities || [],
        stats: data.stats || [],
    };
};
