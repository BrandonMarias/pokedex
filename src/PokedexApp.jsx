import { BrowserRouter } from "react-router-dom";
import { PokedexRouter } from "./routes/PokedexRouter";

export const PokedexApp = () => {
    return (
        <>
            <BrowserRouter>
                <PokedexRouter/>
            </BrowserRouter>
        </>
    );
};
