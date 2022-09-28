import { Route, Routes } from "react-router-dom";
import { SearchPage, NavBar, FavoritePage } from "../";
import { PokemosPage, PokemonPage } from "../";

export const PokedexRouter = () => {
    return (
        <>
            <NavBar />

            <div className="container">
                <Routes>
                    <Route path="pokemons" element={<PokemosPage />} />
                    <Route path="types" element={<h1>types</h1>} />
                    <Route path="types/:typeName" element={<h1>types type</h1>} />
                    <Route path="pokemon/:pokemonId" element={<PokemonPage />} />
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
