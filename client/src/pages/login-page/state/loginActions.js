import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
// Api
import { api } from '../../../api';
// ActionTypes
import { actionTypes } from './loginActionTypes';

export const stopFetching = createAction(actionTypes.LOGIN_STOP_FETCHING);
export const setFetchingError = createAction(
  actionTypes.LOGIN_SET_FETCHING_ERROR
);

export const setUserStatus = createAction(actionTypes.LOGIN_SET_STATUS);

export const fillUserData = createAction(actionTypes.LOGIN_SET_STATUS);

/**
 * Checking user registration
 * @param credentials -> password, email
 */
export const checkUserAsync = createAsyncThunk(
  actionTypes.LOGIN_FETCH_ASYNC,
  async (credentials, thunkAPI) => {
    const response = await api.users.login(credentials);
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
