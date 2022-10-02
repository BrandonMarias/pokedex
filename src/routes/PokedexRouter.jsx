import { Route, Routes } from "react-router-dom";
import { SearchPage, NavBar, FavoritePage, TypePage } from "../";
import { PokemosPage, PokemonPage, TypesPage } from "../";

export const PokedexRouter = () => {
    return (
        <>
            <NavBar />

            <div className="container">
                <Routes>
                    <Route path="pokemons" element={<PokemosPage />} />
                    <Route path="types" element={<TypesPage/>} />
                    <Route path="types/:type" element={<TypePage/>} />
                    <Route path="pokemons/:pokemonId" element={<PokemonPage />} />
                    <Route path="/" element={<PokemosPage />} />
                    <Route path="moves" element={<h1>movies</h1>} />
                    <Route path="search" element={<SearchPage/>} />
                    <Route path="*" element={<h1>404</h1>} />
                    <Route path="favorites" element={<FavoritePage/>} />
                </Routes>
            </div>
        </>
    );
};
