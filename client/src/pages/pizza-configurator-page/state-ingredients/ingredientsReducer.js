import { createReducer } from '@reduxjs/toolkit';

// Action Types
import { ingredientsActionTypes } from './ingredientsActionTypes';

const initialState = {
  ingredients: [
    {
      id: '0',
      name: '30',
      slug: '30',
      price: 200,
      category: 'size',
      image: '',
      thumbnail: '',
    },
    {
      category: 'dough',
      id: '1',
      image: '',
      name: 'Тонкое',
      price: 0,
      slug: 'thin',
      thumbnail: '',
    },
    {
      category: 'sauce',
      id: '2',
      image: '',
      name: 'Томатный',
      price: 0,
      slug: 'tomato-sauce',
      thumbnail: '',
    },
  ],
  error: null,
  isLoading: false,
};

export const ingredientsReducer = createReducer(initialState, builder => {
  builder
    .addCase('ingredients/fetchIngredientsAsync/pending', state => {
      state.isLoading = true;
    })
    .addCase('ingredients/fetchIngredientsAsync/rejected', state => {
      state.error = 'fetching error';
    })
    .addCase(ingredientsActionTypes.INGREDIENTS_STOP_FETCHING, state => {
      state.isLoading = false;
    })
    .addCase(ingredientsActionTypes.INGREDIENTS_FILL, (state, action) => {
      state.ingredients = action.payload;
      state.isLoading = false;
      state.error = null;
    });
});