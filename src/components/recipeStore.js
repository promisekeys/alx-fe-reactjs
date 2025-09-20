import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  // add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // update an existing recipe (expects object with id and fields to update)
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
      ),
    })),

  // delete by id
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  // set the full list (optional initializer)
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
export { useRecipeStore };
