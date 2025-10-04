import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ recipes }) => {
  return (
    <div className="min-h-screen py-10 bg-gradient-to-r from-green-100 via-blue-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-800 drop-shadow-md">
          🍽️ Recipe Sharing Platform
        </h1>

        <div className="flex justify-center mb-8">
          <Link
            to="/add-recipe"
            className="bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold px-5 py-3 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
          >
            ➕ Add New Recipe
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                  {recipe.title}
                </h2>
                <p className="text-gray-600 mb-4">{recipe.summary}</p>
                <Link to={`/recipe/${recipe.id}`}>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium px-4 py-2 rounded-md hover:opacity-90 transition-all duration-300">
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
