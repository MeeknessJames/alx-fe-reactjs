import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load data from the local JSON file
    setRecipes(data);
  }, []);

  return (
    <div className="min-h-screen py-8 bg-gradient-to-r from-green-100 via-blue-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          🍴 Recipe Sharing Platform
        </h1>

        <div className="flex justify-center mb-6">
          <Link
            to="/add-recipe"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
          >
            ➕ Add New Recipe
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  {recipe.title}
                </h2>
                <p className="text-gray-600">{recipe.summary}</p>
                <Link to={`/recipe/${recipe.id}`}>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    View Recipe
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
