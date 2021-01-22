import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
// ActionTypes
import { ordersListActionTypes } from './ordersListActionTypes';
// Api
import { api } from '../../../api';

export const stopFetching = createAction(
  ordersListActionTypes.ORDERS_STOP_FETCHING
);

export const setFetchingError = createAction(
  ordersListActionTypes.ORDERS_SET_FETCHING_ERROR
);

export const fillOrders = createAction(ordersListActionTypes.ORDERS_FILL);

// Async
export const fetchOrdersAsync = createAsyncThunk(
  ordersListActionTypes.ORDERS_FETCH_ASYNC,
  async (_, thunkAPI) => {
    const response = await api.orders.getAllOrders();

    if (response.status === 200) {
      const results = await response.json();

      thunkAPI.dispatch(fillOrders(results));
    } else {
      const error = {
        status: response.status,
      };

      thunkAPI.dispatch(setFetchingError(error));
    }

    thunkAPI.dispatch(stopFetching());
  }
);
