import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// Api
import { api } from '../../../api';

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

export const fetchIngredientsAsync = createAsyncThunk(
  'ingredients/ingredientsFetchAsync',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(ingredientsReducer.actions.startFetching);
    const response = await api.ingredients.availableIngredients();

    if (response.status === 200) {
      const results = await response.json();

      const resultsWithCorrectTypes = results.map(item => ({
        ...item,
        price: Number(item.price),
      }));

      thunkAPI.dispatch(
        ingredientsReducer.actions.fillIngredients(resultsWithCorrectTypes)
      );
    } else {
      const error = {
        status: response.status,
      };
      thunkAPI.dispatch(ingredientsReducer.actions.setFetchingError(error));
    }

    thunkAPI.dispatch(ingredientsReducer.actions.stopFetching());
  }
);

export const ingredientsReducer = createSlice({
  name: 'ingreddients',
  initialState,
  reducers: {
    startFetching: state => {
      state.isLoading = true;
    },
    stopFetching: state => {
      state.isLoading = true;
    },
    setFetchingError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    fillIngredients: (state, action) => {
      state.ingredients = action.payload;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: {
    [fetchIngredientsAsync.fulfilled]: (state, action) => {
      state.ingredients = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchIngredientsAsync.rejected]: state => {
      state.isLoading = false;
      state.error = {
        status: 'fetching error',
      };
    },
    [fetchIngredientsAsync.pending]: state => {
      state.isLoading = true;
    }
  },
});
