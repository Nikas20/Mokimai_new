import { deliteData } from "../service/delite.js";
import { Link } from "react-router";
function Recipe({ recipe }) {
  const deleteData = async (id) => {
    try {
      deliteData(id);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <div className="p-10">
        <Link
          to={`/recipte/${recipe.id}`}
          className={`bg-[url('${recipe.img}')] bg-cover bg-center h-screen`}
        >
          <h2>{recipe.name}</h2>
        </Link>
        <button onClick={() => deleteData(recipe.id)}>Delite</button>
      </div>
    </>
  );
}
export default Recipe;
