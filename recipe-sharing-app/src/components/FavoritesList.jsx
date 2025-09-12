import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const { favorites, recipes, removeFavorite } = useRecipeStore((state) => ({
    favorites: state.favorites,
    recipes: state.recipes,
    removeFavorite: state.removeFavorite,
  }));

  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean);

  if (favoriteRecipes.length === 0) return <p>No favorite recipes yet.</p>;

  return (
    <div style={{ marginTop: '24px' }}>
      <h2>My Favorites</h2>
      {favoriteRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '12px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>Remove Favorite</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
