import { createReducer } from '@reduxjs/toolkit';
import { signupActionTypes } from './signupActionTypes';

const initialState = {
  error: null,
  isRegistered: null,
  isLoading: false,
  login: { password: '', email: '' },
};

export const signupReducer = createReducer(initialState, builder => {
  builder
    .addCase('signup/userRegistationAsync/pending', state => {
      state.isLoading = true;
    })
    .addCase('signup/userRegistationAsync/reject', state => {
      state.isLoading = false;
      state.error = 'fetching error';
    })
    .addCase(signupActionTypes.SIGNUP_STOP_FETCHING, state => {
      state.isLoading = false;
    })
    .addCase(signupActionTypes.SIGNUP_SET_FETCHING_ERROR, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(signupActionTypes.SIGNUP_FILL, (state, action) => {
      state.isLoading = false;
      state.login = action.payload;
    })
    .addCase(signupActionTypes.SIGNUP_SET_STATUS, (state, action) => {
      state.isLoading = false;
      state.isRegistered = action.payload;
      state.error = null;
    });
});
