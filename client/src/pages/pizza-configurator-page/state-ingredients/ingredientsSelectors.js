export const getIngredients = state => state.ingredients.ingredients;

export const getIngredientsByCategory = category => state => {
  return state.ingredients.ingredients.filter(i => i.category === category);
};

export const getLoadingStatus = state => state.ingredients.isLoading;
