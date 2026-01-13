import { useEffect, useState } from "react";

function PokemonGet() {

    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState("")

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("http://localhost:3000/pokemon")

                if (!response.ok) {
                    throw new Error(`Error! Response status: ${response.status}`);
                }
                const result = await response.json();
                setPokemons(result)
            } catch (error) {
                console.log(error.message);
            }
        })();
    },[])

    return(
        <>
        <div>{error}</div>
        <div className="grid grid-cols-4 gap-4">
            {pokemons.map((pokemon) => (
                <div id="card" key={pokemon.id} className="grid grid-cols-1 content-center">
                    <img src={pokemon.frontURL} alt={pokemon.name}  className="mx-auto"/>
                    <p>{pokemon.name}</p>
                    <p>❤️{pokemon.hp}</p>
                </div>
            ))}
        </div>
        </>
    )
}
export default PokemonGet