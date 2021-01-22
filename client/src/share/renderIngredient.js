/**
 * Function render selected ingredients
 * @param selectedIngredients - selected ingredient
 * @param availableIngredients - possible ingredients
 */
export const renderIngredients = (
  selectedIngredients,
  availableIngredients
) => {
  if (
    selectedIngredients &&
    typeof selectedIngredients === 'string' &&
    availableIngredients.length
  ) {
    return availableIngredients
      .filter(i => {
        return i.slug === selectedIngredients;
      })[0]
      .name?.toLowerCase();
  }

  if (Array.isArray(selectedIngredients)) {
    if (selectedIngredients.length && availableIngredients.length) {
      return selectedIngredients
        ?.map(selectedIngredient => {
          return availableIngredients
            .filter(i => i.slug === selectedIngredient)[0]
            .name?.toLowerCase();
        })
        .join(', ');
    }
  }

  return undefined;
};
