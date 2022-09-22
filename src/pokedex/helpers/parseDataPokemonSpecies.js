import {languageCode} from "../settings/lenguage"


export const parseDataPokemonSpecies = (data) => {
    const { flavor_text_entries, evolution_chain } = data;

    const biography = flavor_text_entries?.find(
        (entry) => entry.language.name === languageCode
    )?.flavor_text;

    
    const urlEvolutions = evolution_chain?.url || "";

    return {
        biography,
        urlEvolutions,
    };
};
