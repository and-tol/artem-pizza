import { Ingredient } from '../types';

/**
 * Function render selected ingredients
 * @param selectedIngredients - selected ingredient
 * @param availableIngredients - possible ingredients
 */
export const renderIngredients = (
  selectedIngredients: string[] | string,
  availableIngredients: Ingredient[]
): string | undefined => {
  if (typeof selectedIngredients === 'string' && availableIngredients.length) {
    return availableIngredients
      .filter(i => i.slug === selectedIngredients)[0]
      .name.toLowerCase();
  }

  if (Array.isArray(selectedIngredients)) {
    if (selectedIngredients.length && availableIngredients.length) {
      return selectedIngredients
        ?.map(selectedIngredient => {
          return availableIngredients
            .filter(i => i.slug === selectedIngredient)[0]
            .name.toLowerCase();
        })
        .join(', ');
    }
  }

  return undefined;
};
