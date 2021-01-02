// Types
import { Ingredient, State } from '../../../types';

export const getIngredients = (state: State): Ingredient[] =>
  state.ingredients.ingredients;

export const getIngredientsByCategory = (category: string) => (
  state: State
): Ingredient[] => {
  return state.ingredients.ingredients.filter(
    (i: Ingredient) => i.category === category
  );
};
