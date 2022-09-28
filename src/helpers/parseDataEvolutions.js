const details = (evolution) => {
    const tradeSpecies = evolution.trade_species?.name || null;
    const heldItem = evolution.held_item?.name || null;
    const knownMove = evolution.known_move?.name || null;
    const knownMoveType = evolution.known_move_type?.name || null;
    const location = evolution.location?.name || null;
    const minLevel = evolution.min_level || null;
    const minHappiness = evolution.min_happiness || null;
    const minBeauty = evolution.min_beauty || null;
    const minAffection = evolution.min_affection || null;
    const needsOverworldRain = evolution.needs_overworld_rain || null;
    const timeOfDay = evolution.time_of_day || null;

    return [
        tradeSpecies && `Trade Species ${tradeSpecies}`,
        heldItem && `Held Item ${heldItem}`,
        knownMove && `Known Move ${knownMove}`,
        knownMoveType && `Known Move Type ${knownMoveType}`,
        location && `Location ${location}`,
        minLevel && `Level ${minLevel}`,
        minHappiness && `Happiness ${minHappiness}`,
        minBeauty && `Beauty ${minBeauty}`,
        minAffection && `Affection ${minAffection}`,
        needsOverworldRain && `Overworld Rain`,
        timeOfDay && `Time of Day ${timeOfDay}`,
    ]
        .filter((item) => item)
        .join(", ");
};

const getEvolutionDetails = ({ evolution_details }) => {
    const trigger = evolution_details[0]?.trigger?.name || null;
    const description = details(evolution_details[0])
    const detailsDescription = description ? `: ${description}` : "";

    switch (trigger) {
        case "level-up":
            return `Level Up${detailsDescription}`;
        case "use-item":
            return `Use ${evolution_details[0].item.name} ${detailsDescription}`;
        case "trade":
            return `Trade${detailsDescription}`;
        case "shed":
            return `Shed`;
        case "spin":
            return `Spin`;
        case "tower-of-darkness":
            return `Tower of Darkness`;
        case "tower-of-water":
            return `Tower of Water`;
        case "three-critical-hits":
            return `Three Critical Hits`;
        case "take-damage":
            return `Take Damage`;
        case "other":
            return `Other`;
        default:
            return null;
    }
};

export const parseDataEvolutions = ({ chain }) => {
    const evolutions = {
        firstEvolution: [],
        secondEvolution: [],
        thirdEvolution: [],
    };
    const firstEvolution = chain.species;

    evolutions.firstEvolution.push({
        name: firstEvolution.name,
        url: firstEvolution.url.replace("/pokemon-species", "/pokemon"),
    });

    if (chain.evolves_to.length > 0) {
        chain.evolves_to.forEach((secondEvolution) => {
            evolutions.secondEvolution.push({
                name: secondEvolution.species.name,
                url: secondEvolution.species.url.replace("/pokemon-species", "/pokemon"),
                evolutionDetails: getEvolutionDetails(secondEvolution),
            });

            if (secondEvolution.evolves_to.length > 0) {
                secondEvolution.evolves_to.forEach((thirdEvolution) => {
                    evolutions.thirdEvolution.push({
                        name: thirdEvolution.species.name,
                        url: thirdEvolution.species.url.replace("/pokemon-species", "/pokemon"),
                        evolutionDetails: getEvolutionDetails(thirdEvolution),
                    });
                });
            }
        });
    }
    return evolutions;
};
