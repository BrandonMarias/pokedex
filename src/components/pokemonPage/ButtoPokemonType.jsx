import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getPokemonType } from "../../";

export const ButtoPokemonType = ({ name }) => {
    const button = useRef("");
    const navigate = useNavigate();
    const type = getPokemonType(name);

    const style = {
        backgroundColor: type.color || "black",
    };

    const onClick = () => {
        navigate("/types/" + type.name);
    };

    const onMouseEnter = () => {
        button.current.style.backgroundColor = type.colorHover;
    };

    const onMouseLeave = () => {
        button.current.style.backgroundColor = type.color;
    };

    return (
        <button
            className="btn btn-secondary btn-sm me-2 mt-2 capitalize"
            style={style}
            ref={button}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            {type.name}
        </button>
    );
};
