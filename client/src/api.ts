import { IOrder } from './types';

export const root = 'http://localhost:4000';

export const api = Object.freeze({
  ingredients: {
    availableIngredients: () => {
      return fetch(`${root}/ingredients`);
    },
  },

  orders: {
    createOrder: (data: IOrder) => {
      return fetch(`${root}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
      });
    },
    getAllOrders: () => {
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
