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
      id: '1',
      name: 'Тонкое',
      slug: 'thin',
      price: 0,
      category: 'dough',
      image: '',
      thumbnail: '',
    },
    {
      id: '2',
      name: 'Томатный',
      slug: 'tomato-sauce',
      category: 'sauces',
      price: 0,
      thumbnail: '',
      image: '',
    },
  ],
  error: null,
  isLoading: true,
};

export const fetchIngredientsAsync = createAsyncThunk(
  'ingredients/ingredientsFetchAsync',
  async (_, thunkAPI) => {
    const response = await api.ingredients.availableIngredients();

    if (response.status === 200) {
      const results = await response.json();
      const resultsWithCorrectTypes = results.map(item => ({
        ...item,
        price: Number(item.price),
      }));

      return resultsWithCorrectTypes;
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
    stopFetching: state => {
      state.isLoading = true;
    },
    setFetchingError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
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
    },
  },
});
