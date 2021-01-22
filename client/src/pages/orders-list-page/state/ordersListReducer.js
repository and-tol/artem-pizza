import { createReducer } from '@reduxjs/toolkit';
// ActionTypes
import { ordersListActionTypes } from './ordersListActionTypes';

const initialState = {
  orders: [],
  isLoading: false,
  error: null,
};

export const ordersListReducer = createReducer(initialState, builder => {
  builder
    .addCase('orders/fetchOrdersAsync/pending', state => {
      state.isLoading = true;
    })
    .addCase('orders/fetchOrdersAsync/reject', state => {
      state.isLoading = false;
      state.error = 'fetcing error';
    })
    .addCase(ordersListActionTypes.ORDERS_STOP_FETCHING, state => {
      state.isLoading = false;
    })
    .addCase(ordersListActionTypes.ORDERS_FILL, (state, action) => {
      state.orders = action.payload;
      state.isLoading = false;
      state.error = null;
    });
});
