import { useFetch } from "../../hooks";
import { languageCode } from "../settings/lenguage";

export const Ability = ({ ability }) => {
    const { data, error, loading } = useFetch(ability.ability.url);

    if (loading || error)
        return (
            <button className="btn btn-sm capitalize ">
                {" "}
                {ability.ability.name}
            </button>
        );

    const effect = data.effect_entries?.filter(
        (entry) =>
            entry.language.name === languageCode || entry.language.name === "en"
    )[0]?.short_effect;

    return (
        <button
            className="btn btn-sm my-tooltip capitalize"
            data-tooltip={effect}
        >
            {ability.ability.name}
        </button>
    );
};
