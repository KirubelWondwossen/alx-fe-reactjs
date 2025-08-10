import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import useRecipeStore from "./components/recipeStore";

function RecipeDetailsWrapper({ id }) {
  return <RecipeDetails recipeId={parseInt(id)} />;
}

import { useParams } from "react-router-dom";
const RecipeDetailsRoute = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

function App() {
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );
  const favorites = useRecipeStore((state) => state.favorites);

  // Regenerate recommendations whenever favorites change
  useEffect(() => {
    generateRecommendations();
  }, [favorites, generateRecommendations]);

  return (
    <Router>
      <div style={{ display: "flex", gap: "2rem" }}>
        {/* Left Column: Recipe List + Add Recipe */}
        <div style={{ flex: 3 }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <RecipeList />
                  <AddRecipeForm />
                </>
              }
            />
            <Route path="/recipe/:id" element={<RecipeDetailsRoute />} />
          </Routes>
        </div>

        {/* Right Column: Favorites and Recommendations */}
        <div style={{ flex: 1 }}>
          <FavoritesList />
          <hr />
          <RecommendationsList />
        </div>
      </div>
    </Router>
  );
}

export default App;
