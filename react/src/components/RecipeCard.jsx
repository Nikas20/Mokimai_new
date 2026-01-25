import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getOne } from "../service/get";
import { Link } from "react-router";

function RecipeCard() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState({});
  const [error, setError] = useState(null);

  const fetchRecipe = async () => {
    try {
      const result = await getOne(id);
      setRecipe(result);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [id]); 

  const { name, img, category, ingredients = [], instructions = [] } = recipe;

  return (
    <div>
      {error && <p>{error}</p>}
{/* <div><RecipeEdit /></div> */}
<Link to={`/edit/${id}`}>Edit</Link>
      <div>
        <h2>{name}</h2>
        <img src={img} alt={name} />
      </div>

      <div>
        <h3>Category: {category}</h3>

        <h4>Ingredients</h4>
        <ul>
          {ingredients.map((item, index) => (
            <li key={item?.id ?? index}>
              {typeof item === "string" ? item : item.ingredient}
            </li>
          ))}
        </ul>

        <h4>Instructions</h4>
        <ul>
          {instructions.map((instruction, index) => (
            <li key={instruction.id ?? index}>
              {typeof instruction === "string"
                ? instruction
                : instruction.instruction}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecipeCard;
