import { languageCode } from "../settings/lenguage";

export const parseDataPokemonSpecies = (data) => {
    const { flavor_text_entries, evolution_chain, } = data;

    const biography = flavor_text_entries?.find(
        (entry) => entry.language.name === languageCode
    )?.flavor_text;

    const urlEvolutions = evolution_chain?.url ?? "";

    return {
        biography,
        urlEvolutions,
        isBaby: data?.is_baby ?? false,
        isLegendary: data?.is_legendary ?? false,
        isMythical: data?.is_mythical ?? false,
        varieties: data?.varieties?.filter(({is_default}) => !is_default) || [],
    };
};
