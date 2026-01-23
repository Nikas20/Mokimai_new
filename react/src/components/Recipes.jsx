import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { useContext } from "react";
import RecipeContext from "../RecipeContext";
function Recipes() {
  const { recipes, fetchData, error } = useContext(RecipeContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const filteredRecipesName = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredRecipesCategory = recipes.filter((recipe) =>
    recipe.category.toLowerCase().includes(search.toLowerCase()),
  );

  const [typeSearch, setTypeSearch] = useState(true); // true search by name false search by category

  const changeType = () => {
    setTypeSearch(!typeSearch);
  };

  return (
    <>
      <main>
        {error && <p>{error}</p>}

        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 mb-4"
        />
        <button type="button" onClick={changeType}>
          {typeSearch
            ? "Change to search by Category"
            : " Change to search by Name"}
        </button>

        {typeSearch
          ? filteredRecipesName.map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe} />
            ))
          : filteredRecipesCategory.map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe} />
            ))}
      </main>
    </>
  );
}
export default Recipes;
