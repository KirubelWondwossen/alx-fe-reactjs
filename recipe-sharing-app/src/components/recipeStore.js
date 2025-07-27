import create from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      ),
    })),

  searchTerm: "",
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filteredRecipes: [],
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    if (!searchTerm.trim()) {
      // If search term is empty, show all recipes
      set({ filteredRecipes: recipes });
    } else {
      set({
        filteredRecipes: recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      });
    }
  },

  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
