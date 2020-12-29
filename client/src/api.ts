import { Order } from './types';

export const root = 'http://localhost:4000';

export const api = Object.freeze({
  ingredients: {
    availableIngredients: () => {
      return fetch(`${root}/ingredients`, { method: 'GET' });
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
    showAllOrders: () => {
      return fetch(`${root}/orders`, {
        method: 'GET',
      });
    },
  },
});
