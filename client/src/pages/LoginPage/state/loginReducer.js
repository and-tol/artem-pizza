import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// Api
import { api } from '../../../api';

const initialState = {
  login: { password: '', email: '' },
  isUserRegistered: null,
  isUserLogin: null,
  isLoading: false,
  error: null,
};

export const checkUserAsync = createAsyncThunk(
  'login/loginFetchAsync',
  async (credentials, thunkAPI) => {
    const response = await api.users.login(credentials);
    if (response.status === 200) {
      const results = await response.json();

      thunkAPI.dispatch(loginReducer.setUserStatus(results));
      return results;
    } else {
      const error = {
        status: response.status,
      };
      thunkAPI.dispatch(loginReducer.setFetchingError(error));
    }
    thunkAPI.dispatch(loginReducer.stopFetching());
  }
);

export const loginReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    stopFetching: state => {
      state.isLoading = true;
    },
    setFetchingError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    fillUserData: (state, action) => {
      state.login = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setUserStatus: (state, action) => {
      state.isUserRegistered = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    userLogout: state => {
      state.login = { password: '', email: '' };
      state.isUserRegistered = null;
      state.isUserLogin = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: {
    [checkUserAsync.fulfilled]: (state, action) => {
      state.login = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [checkUserAsync.rejected]: state => {
      state.isLoading = false;
      state.error = {
        status: 'fetching error',
      };
    },
    [checkUserAsync.pending]: state => {
      state.isLoading = true;
    },
  },
});
