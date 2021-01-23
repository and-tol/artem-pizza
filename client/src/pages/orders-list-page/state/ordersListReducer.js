import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// ActionTypes
import { ordersListActionTypes } from './ordersListActionTypes';

const initialState = {
  orders: [],
  isLoading: false,
  error: null,
};

export const fetchOrdersListAsync = createAsyncThunk(
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

export const ordersListReducer = createSlice({
  name: 'ordersList',
  initialState,
  reducers: {
    startFetching: state => {
      state.isLoading = true;
    },
    stopFetching: state => {
      state.isLoading = false;
    },
    setFetchingError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    ordersFill: (state, action) => {
      state.orders = action.payload;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: {
    [fetchOrdersListAsync.fulfilled]: (state, action) => {
      state.order = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchOrdersListAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = {
        status: 'fetching error',
      };
    },
    [fetchOrdersListAsync.pending]: state => {
      state.isLoading = true;
    },
  },
});
