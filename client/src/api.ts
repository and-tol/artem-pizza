import { Order, NewIngredient } from './types';

export const root = 'http://localhost:3000';

export const api = Object.freeze({
  ingredients: {
    availableIngredients: () => {
      return fetch(`${root}/ingredients`, { method: 'GET' });
    },

    createNewIngredient: (data: NewIngredient) => {
      return fetch(`${root}/ingredients`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(data),
      });
    },
  },

  orders: {
    createOrder: (data: Order) => {
      return fetch(`${root}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
      });
    },
  },
});
