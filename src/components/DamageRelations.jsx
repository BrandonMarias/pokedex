import { DamageRelationsCard } from "..";
import { nanoid } from "nanoid";

export const DamageRelations = ({ damage_relations }) => {
    const damageRelations = Object.entries(damage_relations);
    
    return (
        <>
            {damageRelations.map(([key, value]) => {
                return (
                    <div className="col" key={nanoid()}>

                        <DamageRelationsCard
                            title={key.split("_").join(" ")}
                            key={nanoid()}
                            damage={value}
                        />
                    </div>
                );
            })}
        </>
    );
};
