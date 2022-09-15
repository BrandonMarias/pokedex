import { nanoid } from "nanoid";
import { Ability } from "./Ability";
import { ButtoPokemonType } from "./ButtoPokemonType";
import { PokemonStats } from "./PokemonStats";
import { ReturnButton } from "./ReturnButton";

export const PokemonDetails = ({
    name,
    height,
    weight,
    types,
    abilities,
    stats,
    id
}) => {
    return (
        <div className="col-xl-9">
            <h3>{name.toLocaleUpperCase()}</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <b>#</b>
                    {id}
                </li>
                <li className="list-group-item">
                    <b>Height: </b>
                    {height}
                </li>
                <li className="list-group-item">
                    <b>Weight: </b>
                    {weight}
                </li>
                <li className="list-group-item">
                    <b>Types: </b>
                    {types.map((type) => (
                        <ButtoPokemonType
                            name={type.type.name}
                            key={type.slot}
                        />
                    ))}
                </li>
                <li className="list-group-item">
                    <b>Abilities: </b>
                    {abilities.map((ability) => (
                        <Ability ability={ability} key={nanoid()} />
                    ))}
                </li>
                <li className="list-group-item">
                    <PokemonStats stats={stats} />
                </li>
                <li className="list-group-item">
                    <ReturnButton />
                </li>
            </ul>
        </div>
    );
};
