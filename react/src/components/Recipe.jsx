import deliteData from "../service/delite.js";
import { Link } from "react-router";
function Recipe({ recipe }) {
    const deliteData = async (id) => {
        try {
            deliteData(id)
        } catch (error) {
            alert(error.message)
        }
    }
        return (
            <Link  className={`bg-[url('${recipe.img}')] bg-cover bg-center h-screen`}>
                <h2>{recipe.name}</h2>
            </Link>
        )
}
export default Recipe;