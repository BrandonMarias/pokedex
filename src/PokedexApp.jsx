import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";

export const PokedexApp = () => {
    return (
        <>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </>
    );
};
