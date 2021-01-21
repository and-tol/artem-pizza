import { createReducer } from '@reduxjs/toolkit';
// ActionTypes
import { checkoutActionTypes } from './checkoutActionTypes';

export const initialState = {
  order: null,
  error: null,
  isLoading: false,
  isAccepted: true,
};

export const checkoutReducer = createReducer(initialState, builder => {
  builder
    .addCase('checkout/sendOrderAsync/pending', state => {
      state.isLoading = true;
    })
    .addCase('checkout/sendOrderAsync/rejected', state => {
      state.isLoading = false;
      state.error = 'fetching error';
    })
    .addCase(checkoutActionTypes.CHECKOUT_STOP_FETCHING, state => {
      state.isLoading = false;
    })
    .addCase(
      checkoutActionTypes.CHECKOUT_SET_FETCHING_ERROR,
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    )

    .addCase(checkoutActionTypes.CHECKOUT_FILL, (state, action) => {
      state.isLoading = false;
      state.order = action.payload;
    })
    .addCase(checkoutActionTypes.CHECKOUT_SET_ACCEPT, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.isAccepted = action.payload;
    });
});
