// src/components/RecipeDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((item, index) => index === parseInt(id));
        setRecipe(foundRecipe || null);
      })
      .catch((err) => console.error("Error loading recipe:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading...</div>;
  }

  if (!recipe) {
    return (
      <div className="text-center py-10 text-red-500">
        Recipe not found.
        <div className="mt-4">
          <Link to="/" className="text-blue-500 underline hover:text-blue-700">
            Go back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <Link
        to="/"
        className="text-blue-500 underline hover:text-blue-700 mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        {recipe.image && (
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-64 sm:h-96 object-cover"
          />
        )}

        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {recipe.name}
          </h1>
          <p className="text-gray-700 mb-6">{recipe.description}</p>

          {/* Ingredients */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              Ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {recipe.ingredients?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Cooking instructions */}
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              Instructions
            </h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              {recipe.instructions?.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="mt-6 flex gap-6 text-gray-500 text-sm">
            <span>⏱ {recipe.cookingTime} mins</span>
            <span>👨‍🍳 {recipe.servings} servings</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
