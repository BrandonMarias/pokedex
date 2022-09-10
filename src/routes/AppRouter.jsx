import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/LoginPage";
import { PokedexRouter } from "../pokedex/routes/PokedexRouter";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="*" element={<PokedexRouter/>} />
            </Routes>
        </>
    );
};
