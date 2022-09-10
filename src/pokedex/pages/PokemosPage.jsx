import { PokemonList } from "../components/PokemonList"


export const PokemosPage = () => {
  return (
    <>
        <h1 className="mt-4">Pokemons</h1>
        <hr />

        <div className="row">
            <PokemonList/>
        </div>
    <br />
    </>
  )
}
