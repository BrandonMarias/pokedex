export const parseDataEvolutions = ({ chain }) => {
    const evolutions = {
        firstEvolution: [],
        secondEvolution: [],
        thirdEvolution: [],
    };
    const firstEvolution = chain.species;

    evolutions.firstEvolution.push({
        name: firstEvolution.name,
        url: `https://pokeapi.co/api/v2/pokemon/${firstEvolution.name}`,
    });


    if (chain.evolves_to.length > 0) {
        chain.evolves_to.forEach((secondEvolution) => {
            evolutions.secondEvolution.push({
                name: secondEvolution.species.name,
                url: `https://pokeapi.co/api/v2/pokemon/${secondEvolution.species.name}`,
            });

            if (secondEvolution.evolves_to.length > 0) {
                secondEvolution.evolves_to.forEach((thirdEvolution) => {
                    evolutions.thirdEvolution.push({
                        name: thirdEvolution.species.name,
                        url: `https://pokeapi.co/api/v2/pokemon/${thirdEvolution.species.name}`,
                    });
                });
            }
        });
    }
    return evolutions;
};
