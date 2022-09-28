import { nanoid } from "nanoid";
import { Ability, ButtoPokemonType, PokemonStats } from "../";

export const PokemonDetails = (props) => {
    const { name, height, weight, types, abilities, stats, id } = props;
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
                <li className="list-group-item mt-2">
                    <PokemonStats stats={stats} />
                </li>
            </ul>
        </div>
    );
};
