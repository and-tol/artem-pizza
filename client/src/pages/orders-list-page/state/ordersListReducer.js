import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// Api
import { api } from '../../../api';

const initialState = {
  orders: [],
  isLoading: false,
  error: null,
};

export const fetchOrdersListAsync = createAsyncThunk(
  'orders/fetchOrdersListAsync',
  async (_, thunkAPI) => {
    const response = await api.orders.getAllOrders();

    if (response.status === 200) {
      const results = await response.json();

      thunkAPI.dispatch(ordersListReducer.actions.fillOrders(results));
    } else {
      const error = {
        status: response.status,
      };

      thunkAPI.dispatch(ordersListReducer.actions.setFetchingError(error));
    }

    thunkAPI.dispatch(ordersListReducer.actions.stopFetching());
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
