import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import recipesData from "./data.json";

function App() {
  const [recipes, setRecipes] = useState(recipesData);

  return (
    <Router>
      <Routes>
        {}
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        {}
        <Route
          path="/add-recipe"
          element={<AddRecipeForm recipes={recipes} setRecipes={setRecipes} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
