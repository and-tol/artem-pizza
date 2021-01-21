import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
// Api
import { api } from '../../../api';

export const stopFetching = createAction('checkout/stopFetching');
export const setFetchingError = createAction('checkout/setFetchingError');
export const fillOrder = createAction('checkout/fill');
export const setAccept = createAction('checkout/setAccept');
export const sendOrderAsync = createAsyncThunk(
  'checkout/sendOrderAsync',
  async (data, thunkAPI) => {
    const response = await api.orders.createOrder(data);
    if (response.status === 200) {
      const { message } = await response.json();
      thunkAPI.dispatch(fillOrder(message));
    } else {
      const error = {
        status: response.status,
      };
      thunkAPI.dispatch(setFetchingError(error));
    }
    thunkAPI.dispatch(stopFetching());
  }
);
