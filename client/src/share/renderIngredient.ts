import { IngredientNameAndPriceState } from '../types';

export const renderIngredient = (
  ingredients: string[],
  data: IngredientNameAndPriceState
): string => {
  const newIngredients: string = ingredients
    ?.map(i => data[i].name.toLowerCase())
    .join(', ');
  return newIngredients[0].toUpperCase() + newIngredients.slice(1);
};
