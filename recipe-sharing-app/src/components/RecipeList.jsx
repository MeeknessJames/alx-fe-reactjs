import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'; 

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm && state.filteredRecipes.length > 0
      ? state.filteredRecipes
      : state.recipes || []
  );

  if (!recipes || recipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '12px' }}>
          {}
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
