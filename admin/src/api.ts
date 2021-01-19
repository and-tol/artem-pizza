export const root = 'http://localhost:4000';

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

    deleteIngredient: (ingredientId: string | null) => {
      return fetch(`${root}/ingredients/${ingredientId}`, {
        method: 'DELETE',
      });
    },

    editIngredient: (data: any, ingredientId: string | null) => {
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

  user: {
    create: (data: any) => {
      return fetch(`${root}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    },
    login: (credentials: any) => {
      return fetch(`${root}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Base ${credentials}`,
        },
        credentials: 'include',
      }).then(token => token.json());
    },
  },
});
