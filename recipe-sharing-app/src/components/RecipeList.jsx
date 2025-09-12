import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ padding: 16 }}>
      <h2>Recipe List</h2>
      {recipes.length === 0 && <p>No recipes yet. Add one!</p>}
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{ border: '1px solid gray', margin: '8px 0', padding: 8 }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <div style={{ marginTop: 8 }}>
            <Link to={`/recipes/${recipe.id}`}>
              <button style={{ marginRight: 8 }}>View</button>
            </Link>
            <Link to={`/recipes/${recipe.id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
