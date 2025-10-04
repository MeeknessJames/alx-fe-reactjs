import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); 
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !steps) {
      setError("Please fill in all fields before submitting.");
      return;
    }

    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps: steps.split(".").map((s) => s.trim()),
    };
    console.log("New Recipe Added:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="min-h-screen py-10 flex items-center justify-center bg-gradient-to-r from-green-100 via-blue-100 to-pink-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Add a New Recipe
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="Enter recipe title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Ingredients (comma-separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="e.g., flour, sugar, eggs"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="Write each step separated by a period."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-transform transform hover:scale-105"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
