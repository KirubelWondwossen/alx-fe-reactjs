import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page: List & Add Recipe Form */}
        <Route
          path="/"
          element={
            <>
              <RecipeList />
              <AddRecipeForm />
            </>
          }
        />

        {/* Recipe Details Page (with Edit & Delete) */}
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </Router>
  );
}

// Wrapper for extracting `id` param
import { useParams } from "react-router-dom";
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default App;
