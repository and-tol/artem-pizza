import { RootState } from '../../../init/rootReducer';
// Types
import { Ingredient } from '../../../types';

export const getIngredients = (state: RootState): Ingredient[] =>
  state.ingredients.ingredients;

export const getIngredientsByCategory = (category: string) => (
  state: RootState
): Ingredient[] => {
  return state.ingredients.ingredients.filter(
    (i: Ingredient) => i.category === category
  );
};
