// Types
import { Ingredient } from '../../../types';

// FIXME: type state  any
export const getIngredients = (state: any): Ingredient[] =>
  state.ingredients.ingredients;

export const getIngredientsByCategory = (category: string) => (
  // FIXME: type state  any
  state: any
): Ingredient[] => {
  return state.ingredients.ingredients.filter(
    (i: Ingredient) => i.category === category
  );
};
