import { nanoid } from 'nanoid';
import {pokeTypes, ReturnButton, TypeCard} from '../';

export const TypesPage = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                {pokeTypes.map((type) => (
                    <TypeCard type={type} key={nanoid()} />
                ))}
            </div>
        </div>
    );
}
