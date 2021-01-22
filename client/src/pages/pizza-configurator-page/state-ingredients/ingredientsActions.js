import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
// ActionTypes
import { ingredientsActionTypes } from './ingredientsActionTypes';
// Api
import { api } from '../../../api';

export const stopFetching = createAction(
  ingredientsActionTypes.INGREDIENTS_STOP_FETCHING
);
export const setFetchingError = createAction(
  ingredientsActionTypes.INGREDIENTS_SET_FETCHING_ERROR
);

export const fillIngredients = createAction(
  ingredientsActionTypes.INGREDIENTS_FILL
);

// Async
export const fetchIngredientsAsync = createAsyncThunk(
  ingredientsActionTypes.INGREDIENTS_FETCH_ASYNC,
  async (_, thunkAPI) => {
    const response = await api.ingredients.availableIngredients();

    if (response.status === 200) {
      const results = await response.json();

      const resultsWithCorrectTypes = results.map(item => ({
        ...item,
        price: Number(item.price),
      }));

      thunkAPI.dispatch(fillIngredients(resultsWithCorrectTypes));
    } else {
      const error = {
        status: response.status,
      };
      thunkAPI.dispatch(setFetchingError(error));
    }

    thunkAPI.dispatch(stopFetching());
  }
);
