
export const root = 'http://localhost:3000';

export const api = Object.freeze({
  ingredients: {
    availableIngredients: () => {
      return fetch(`${root}/ingredients`, { method: 'GET' });
    },

    createNewIngredient: (formData: any) => {
      console.log("api",formData.get('price'))
      return fetch(`${root}/ingredients`, {
        method: 'POST',
        // headers: { 'Content-Type': 'form/multipart' },
        // headers: { 'Content-Type': 'multipart/form-data' },
        body: formData,
        // headers: { 'Content-type': 'application/json' },
        // body: JSON.stringify(data)
      });
    },
  },
});
