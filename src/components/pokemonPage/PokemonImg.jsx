import { useState } from "react";

export const PokemonImg = ({ shinySprite, sprite, name }) => {
    const [img, setImg] = useState(sprite);
    const [shiny, setShiny] = useState(false);

    const noShinySprite = shinySprite.replace("/shiny", "");

    const handleShiny = () => {
        if (shiny) {
            setImg(noShinySprite);
            setShiny(false);
        } else {
            setImg(shinySprite);
            setShiny(true);
        }
    };

    return (
        <div className="col-xl-3 mb-5">
            <img
                src={img}
                alt={name}
                className="animate__animated animate__fadeInLeft pokemon-page__img"
            />

            <div className="form-check form-switch form-switch-md">
                <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="shiny-switch"
                    onClick={handleShiny}
                    disabled={!shinySprite}
                />
                <label
                    className="form-check-label d-block-inline ms-3 h5 mt-1"
                    htmlFor="shiny-switch"
                >
                    {shiny ? "Normal" : "Shiny"}
                </label>
            </div>
        </div>
    );
};
