// src/components/HomePage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Added import

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        🍲 Delicious Recipes
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105"
          >
            {/* Recipe Image */}
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover"
              />
            )}

            {/* Card Content */}
            <div className="p-5 flex flex-col h-full">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {recipe.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {recipe.description}
              </p>

              {/* View Recipe Button */}
              <Link
                to={`/recipe/${index}`}
                className="mt-auto inline-block bg-blue-500 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                View Recipe
              </Link>

              {/* Extra Info */}
              <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                <span>⏱ {recipe.cookingTime} mins</span>
                <span>👨‍🍳 {recipe.servings} servings</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
