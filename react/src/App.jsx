import { Routes, Route } from "react-router";
import { useState } from "react";
import "./App.css";
import { getAllData } from "./service/get";
import Home from "./components/Home";
import RecipeCard from "./components/RecipeCard";
import RecipeContext from "./RecipeContext";
import RecipeAdd from "./components/RecipeAdd";
import RecipeEdit from "./components/RecipteEdit.jsx";
function App() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const results = await getAllData();
      setRecipes(results);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <RecipeContext value={{ recipes, setRecipes, fetchData, error }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipte/:id" element={<RecipeCard />} />
          <Route path="/edit/:id" element={<RecipeEdit />} />
          <Route path="/add" element={<RecipeAdd />} />
        </Routes>
      </RecipeContext>
    </>
  );
}

export default App;
