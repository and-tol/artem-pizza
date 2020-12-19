export const root = 'http://localhost:3000';

export const api = Object.freeze({
  ingredients: {
    availableIngredients: () => {
      return fetch(`${root}/ingredients`, { method: 'GET' });
    },

    createNewIngredient: (data: any) => {
      // console.log('api', data.get('price'));
      console.log('api', data.get(""))
      return fetch(`${root}/ingredients`, {
        method: 'POST',
        // headers: { 'Content-Type': 'form/multipart' },
        // headers: { 'Content-Type': 'multipart/form-data' },
        body: data,
        // headers: { 'Content-type': 'application/json' },
        // body: JSON.stringify(data)
      });
    },

    deleteIngredient: (id: string | null) => {
      console.log("id>>>", id)
      return fetch(`${root}/ingredients/${id}`, {
        method: 'DELETE',
      });
    },
  },
});
