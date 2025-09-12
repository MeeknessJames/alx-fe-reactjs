import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],            
  filteredRecipes: [],      
  searchTerm: '',           

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.filteredRecipes, newRecipe], 
    })),

  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: (state.recipes || []).filter((recipe) =>
        recipe.title.toLowerCase().includes((state.searchTerm || '').toLowerCase())
      ),
    })),
}));
