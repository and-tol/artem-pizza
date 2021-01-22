import { createReducer } from '@reduxjs/toolkit';

import { pizzaActionsTypes } from './pizzaActionsTypes';

const initialState = {
  pizza: {
    size: '30',
    dough: 'thin',
    sauce: 'tomato-sauce',
    cheese: [],
    vegetables: [],
    meat: [],
  },
};

export const pizzaReducer = createReducer(initialState, builder => {
  builder
    .addCase(pizzaActionsTypes.PIZZA_START_CONFIGURATION, (state, action) => {
      state.pizza = action.payload;
    })
    .addCase(pizzaActionsTypes.PIZZA_FILL, (state, action) => {
      state.pizza = action.payload;
    });
});
