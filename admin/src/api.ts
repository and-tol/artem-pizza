export const root = 'http://localhost:3000';

export const api = Object.freeze({
  ingredients: {
    availableIngredients: () => {
      return fetch(`${root}/ingredients`, { method: 'GET' });
    },

    createNewIngredient: (data: any) => {
      return fetch(`${root}/ingredients`, {
        method: 'POST',
        body: data,
      });
    },

    deleteIngredient: (id: string | null) => {
      return fetch(`${root}/ingredients/${id}`, {
        method: 'DELETE',
      });
    },

    editIngredient: (data: any, ingredientId: string | null) => {
      console.log('ingredientId>>>', ingredientId);
      return fetch(`${root}/ingredients/${ingredientId}`, {
        method: 'PUT',
        body: data,
      });
    },

    showIngredient: (ingredientId: string | null) => {
      return fetch(`${root}/ingredients/${ingredientId}`, {
        method: 'GET',
      }).then(ingredient => ingredient.json());
    },
  },
});
