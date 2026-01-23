import RecipeAdd from "./RecipeAdd";
import Recipes from "./Recipes";
import { Link } from "react-router";
function Home() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <p>AllRecipes</p>
        <Link to={"/add"}>Add</Link>
      </div>

      <Recipes />
    </>
  );
}
export default Home;
