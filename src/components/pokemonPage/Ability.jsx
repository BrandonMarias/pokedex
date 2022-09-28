import { useFetch, languageCode } from "../../";

export const Ability = ({ ability }) => {
    const { data, error, loading } = useFetch(ability.ability.url);

    if (loading || error) {
        return (
            <button className="btn btn-sm capitalize ">
                {" "}
                {ability.ability.name}
            </button>
        );
    }

    const effect =
        data.flavor_text_entries?.filter(
            (entry) => entry.language.name === languageCode
        )[0]?.flavor_text ||
        data.flavor_text_entries?.filter(
            (entry) => entry.language.name === "en"
        )[0]?.flavor_text ||
        "No description available";

    return (
        <button
            className="btn btn-sm my-tooltip capitalize"
            data-tooltip={effect}
        >
            {ability.ability.name}
        </button>
    );
};
