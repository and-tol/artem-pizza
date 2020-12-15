import { NewIngredient } from './types';

export const root = 'http://localhost:3000';

export const api = Object.freeze({
  ingredients: {
    availableIngredients: () => {
      return fetch(`${root}/ingredients`, { method: 'GET' });
    },

    createNewIngredient: (formData: any) => {
      console.log("api",formData)
      return fetch(`${root}/ingredients`, {
        method: 'POST',
        // headers: { 'Content-Type': 'form/multipart' },
        // headers: { 'Content-Type': 'multipart/form-data' },
        // headers: { 'Content-Type': 'multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL' },
        body: formData,
      });
    },
  },
});
