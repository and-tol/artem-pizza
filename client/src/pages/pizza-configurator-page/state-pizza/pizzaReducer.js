import { createSlice } from '@reduxjs/toolkit';

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

export const pizzaReducer = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    fillPizza: (state, action) => {
      state.pizza = action.payload;
    },
    resetPizza: state => {
      state.pizza = { ...initialState.pizza };
    },
  },
});
