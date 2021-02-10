import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Api
import { api } from '../../../api';

export const initialState = {
  order: null,
  error: null,
  isLoading: false,
  isOrderAccepted: false,
};

export const sendOrderAsync = createAsyncThunk(
  'checkout/sendOrderAsync',
  async (data, thunkAPI) => {
    const response = await api.orders.createOrder(data);
    if (response.status === 200) {
      const results = await response.json();
      thunkAPI.dispatch(checkoutReducer.actions.setAccept(results.status));
      return results.status;
    } else {
      const error = {
        status: response.status,
      };
      thunkAPI.dispatch(checkoutReducer.actions.setFetchingError(error));
    }
  }
);

export const checkoutReducer = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    stopFetching: state => {
      state.isLoading = true;
    },
    setFetchingError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    fillOrder: (state, action) => {
      state.order = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setAccept: (state, action) => {
      state.isAccepted = action.payload;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: {
    [sendOrderAsync.fulfilled]: (state ) => {
      state.isLoading = false;
      state.error = null;
    },
    [sendOrderAsync.rejected]: state => {
      state.isLoading = false;
      state.error = {
        status: 'fetching error',
      };
    },
    [sendOrderAsync.pending]: state => {
      state.isLoading = true;
    },
  },
});
