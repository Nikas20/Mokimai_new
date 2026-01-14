function Pokemon({pokemon, fetchData}) {

    const deleteData = async (id) => {
        try{
            const requestOptions = {
                method: "DELETE"
            };

            const response = await fetch(
                "http://localhost:3000/pokemon/" + id,
                requestOptions
            );
            if (response.ok) {
                alert("data deeleted")
                fetchData();
            } else {
                throw new Error("Error")
            }
        } catch (error) {
            alert(error.message)
        }
    }

    const updateData = async (id) => {

        try {
            
        
        const response = await fetch(
            "http://localhost:3000/pokemon/" + id)
    
    if (!response.ok) {
                throw new Error("Error")
            }

            const pokemon = await response.json()

            console.log(pokemon);


            //2. pokemon update hp property PATCH

             const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({hp: pokemon.hp + 10}),
    };

    const response2 = await fetch("http://localhost:3000/pokemon/" + id,
        requestOptions
    );
    if (!response2.ok) {
        throw new Error("Patch was not");
        
    }
    fetchData();

    } catch (error) {
         alert(error.message)   
        }
            
}

    return(
        <>
        <div className="grid grid-cols-1 content-center">
        <div id="pokemon" key={pokemon.id} >
                    <img src={pokemon.frontURL} alt={pokemon.name}  className="mx-auto"/>
                    <p>{pokemon.name}</p>
                    <p>❤️{pokemon.hp}</p>
                </div>
                <button onClick={() => deleteData(pokemon.id)} className="bg-red-400">Delete</button>
                <button onClick={() => updateData(pokemon.id)}>10 Health points</button>
             </div>
             </>   
    )
} export default Pokemon