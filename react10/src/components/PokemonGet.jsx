import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
function PokemonGet() {

    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState("")
    const [search, setSearch] = useState("");


    const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/pokemon")

                if (!response.ok) {
                    throw new Error(`Error! Response status: ${response.status}`);
                }
                const result = await response.json();
                setPokemons(result)
            } catch (error) {
                setError(error.message);
            }
        }

    useEffect(() => {
        fetchData();
    },[])

    const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

    return(
        <>
        <div>{error}</div>
        <input
          type="text"
          placeholder="Search pokemon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-5"
        />
        <div className="grid grid-cols-4 gap-4">
            {filteredPokemons.map((pokemon) => (
                <Pokemon pokemon={pokemon} key={pokemon.id} fetchData={fetchData}/>
            ))}
        </div>
        </>
    )
}
export default PokemonGet