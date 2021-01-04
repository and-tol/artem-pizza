import { Ingredient } from '../types';

/**
 * Function render selected ingredients
 * @param selectedIngredients - selected ingredient
 * @param availableIngredients - possible ingredients
 */
export const renderIngredients = (
  selectedIngredients: string[],
  availableIngredients: Ingredient[]
): string =>
  selectedIngredients
    ?.map(selectedIngredient => {
      return availableIngredients
        .filter(i => i.slug === selectedIngredient)[0]
        .name.toLowerCase();
    })
    .join(', ');
