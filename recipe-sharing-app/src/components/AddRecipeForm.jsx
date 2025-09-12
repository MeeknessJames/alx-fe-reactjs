import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      id: Date.now(),
      title,
      description,
    };
    addRecipe(newRecipe);
    setTitle('');
    setDescription('');
    filterRecipes();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '16px' }}>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ padding: '8px', width: '300px', marginRight: '8px' }}
      />
      <input
        type="text"
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{ padding: '8px', width: '300px', marginRight: '8px' }}
      />
      <button type="submit" style={{ padding: '8px 12px' }}>
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
