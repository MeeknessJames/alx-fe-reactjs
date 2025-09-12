import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { recipes, filteredRecipes, searchTerm, addFavorite, favorites } =
    useRecipeStore((state) => ({
      recipes: state.recipes,
      filteredRecipes: state.filteredRecipes,
      searchTerm: state.searchTerm,
      addFavorite: state.addFavorite,
      favorites: state.favorites,
    }));

  const list = searchTerm && filteredRecipes.length > 0 ? filteredRecipes : recipes;

  if (!list || list.length === 0) return <p>No recipes found.</p>;

  return (
    <div>
      {list.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '12px' }}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <button
            onClick={() => addFavorite(recipe.id)}
            disabled={favorites.includes(recipe.id)}
          >
            {favorites.includes(recipe.id) ? 'Favorited' : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
