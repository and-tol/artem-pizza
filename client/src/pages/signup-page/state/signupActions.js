import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
// Api
import { api } from '../../../api';
// ActionTypes
import { signupActionTypes } from './signupActionTypes';

export const stopFetching = createAction(
  signupActionTypes.SIGNUP_STOP_FETCHING
);

export const setFetchingError = createAction(
  signupActionTypes.SIGNUP_SET_FETCHING_ERROR
);

export const setUserStatus = createAction(signupActionTypes.SIGNUP_SET_STATUS);

export const fillUserData = createAction(signupActionTypes.SIGNUP_FIL);

/**
 * Action User check registation
 * @param login -> password, email
 */
export const userRegistationAsync = createAsyncThunk(
  signupActionTypes.SIGNUP_FETCH_ASYNC,
  async (login, thunkAPI) => {
    const response = await api.users.create(login);
    if (response.status === 200) {
      const results = await response.json();

      thunkAPI.dispatch(setUserStatus(results));
    } else {
      const error = {
        status: response.status,
      };
      thunkAPI.dispatch(setFetchingError(error));
    }
    thunkAPI.dispatch(stopFetching());
  }
);
