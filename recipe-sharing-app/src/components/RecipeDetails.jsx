import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  if (!recipe) {
    return (
      <div style={{ padding: 16 }}>
        <p>Recipe not found.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');
  };

  return (
    <div style={{ padding: 16 }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${recipeId}/edit`}>
          <button style={{ marginRight: 8 }}>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div style={{ marginTop: 16 }}>
        <Link to="/">← Back to Recipes</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
