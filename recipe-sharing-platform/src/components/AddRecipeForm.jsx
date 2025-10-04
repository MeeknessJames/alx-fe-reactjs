import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = ({ recipes, setRecipes }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    else if (ingredients.split(",").length < 2)
      newErrors.ingredients = "Please list at least two ingredients";
    if (!instructions.trim()) newErrors.instructions = "Instructions are required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      summary: instructions.substring(0, 100) + "...",
      ingredients: ingredients.split(",").map((item) => item.trim()),
      instructions: instructions.split("\n").map((item) => item.trim()),
      image: "https://via.placeholder.com/300x200",
    };

    setRecipes([...recipes, newRecipe]);

    // Reset form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});

    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Ingredients (separate with commas)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            rows={4}
            placeholder="e.g., 200g spaghetti, 100g pancetta, 2 eggs"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Preparation Steps</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring ${
              errors.instructions ? "border-red-500" : "border-gray-300"
            }`}
            rows={6}
            placeholder="Write each step on a new line"
          ></textarea>
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
