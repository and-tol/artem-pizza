import { IngredientNameAndPriceState, Ingredient } from '../types';

// export const renderIngredient = (
//   ingredients: string[],
//   data: IngredientNameAndPriceState
// ): string => {
//   const newIngredients: string = ingredients
//     ?.map(i => data[i].name.toLowerCase())
//     .join(', ');
//   return newIngredients[0].toUpperCase() + newIngredients.slice(1);
// };

 /**
   * Function render selected ingredients
   * @param ingredients - selected ingredient
   * @param data - possible ingredients
   */
export const renderIngredients = (ingredients: string[], data: Ingredient[]): string =>
  ingredients
    ?.map(selectedIngredient => {
      return data
        .filter(i => i.slug === selectedIngredient)[0]
        .name.toLowerCase();
    })
    .join(', ');
