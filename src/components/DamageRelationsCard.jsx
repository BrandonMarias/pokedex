import { ButtoPokemonType } from "..";
import { nanoid } from "nanoid";

export const DamageRelationsCard = ({ title, damage = [] }) => {
    console.log(title);

    console.log(damage);
    return (
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title capitalize text-center">{title}</h5>
                <ul className="list-group list-group-flush">
                    {damage.length < 1 && (
                        <p className="alert alert-warning">
                            There are no {title}
                        </p>
                    )}
                    {damage.map(({ name }) => (
                        <ButtoPokemonType name={name} key={nanoid()} />
                    ))}
                </ul>
            </div>
        </div>
    );
};
