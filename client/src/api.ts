import { Order } from './types';

export const root = 'http://localhost:4000';

export const api = Object.freeze({
  ingredients: {
    availableIngredients: () => {
      return fetch(`${root}/ingredients`);
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

  users: {
    create: (data: any) => {
      return fetch(`${root}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    },
    login: (credentials: any) => {
      return fetch(`${root}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Base ${credentials}`,
        },
        credentials: 'include',
      });
    },
    logout: () => {
      return fetch(`${root}/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    },
  },
});
