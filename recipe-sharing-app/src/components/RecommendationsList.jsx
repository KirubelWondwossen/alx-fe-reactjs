import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  if (recommendations.length === 0) return <p>No recommendations available.</p>;

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
