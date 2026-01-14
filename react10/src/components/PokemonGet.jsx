import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
function PokemonGet() {

    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState("")


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

    return(
        <>
        <div>{error}</div>
        <div className="grid grid-cols-4 gap-4">
            {pokemons.map((pokemon) => (
                <Pokemon pokemon={pokemon} key={pokemon.id} fetchData={fetchData}/>
            ))}
        </div>
        </>
    )
}
export default PokemonGet