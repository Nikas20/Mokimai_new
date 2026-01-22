import {getAllData} from "../services/get";
import { useEffect, useState } from "react";
function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const data = await getAllData();
            setRecipes(data);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {

        fetchData();
    })
    return (
        <>
        <main>
           {error && <p>{error}</p>}
            {recipes.map((recipe) => (
                <Recipe key={recipe.id} recipe={recipe} />
            ))}
        </main>
        </>
    )
}