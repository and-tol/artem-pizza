import { createReducer } from '@reduxjs/toolkit';
// ActionTypes
import { loginActionTypes } from './loginActionTypes';

const initialState = {
  login: { password: '', email: '' },
  isRegistered: null,
  isLoading: false,
  error: null,
};

export const loginReducer = createReducer(initialState, builder => {
  builder
    .addCase('login/checkUserAsync/pending', state => {
      state.isLoading = true;
    })
    .addCase('login/checkUserAsync/rejected', state => {
      state.isLoading = false;
      state.error = 'fetching error';
    })
    .addCase(loginActionTypes.LOGIN_STOP_FETCHING, state => {
      state.isLoading = false;
    })
    .addCase(loginActionTypes.LOGIN_SET_FETCHING_ERROR, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(loginActionTypes.LOGIN_FILL, (state, action) => {
      state.login = action.payload;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(loginActionTypes.LOGIN_SET_STATUS, (state, action) => {
      state.isRegistered = action.payload;
      state.isLoading = false;
      state.error = null;
    });
});
