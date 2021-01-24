import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Api
import { api } from '../../../api';

export const initialState = {
  order: null,
  error: null,
  isLoading: false,
  isAccepted: true,
};

export const sendOrderAsync = createAsyncThunk(
  'checkout/sendOrderAsync',
  async (data, thunkAPI) => {
    const response = await api.orders.createOrder(data);
    if (response.status === 200) {
      const { message } = await response.json();
      thunkAPI.dispatch(checkoutReducer.actions.fillOrder(message));

      return message;
    } else {
      const error = {
        status: response.status,
      };
      thunkAPI.dispatch(checkoutReducer.actions.setFetchingError(error));
    }
    thunkAPI.dispatch(checkoutReducer.actions.stopFetching());
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
    [sendOrderAsync.fulfilled]: (state, action) => {
      state.order = action.payload;
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
