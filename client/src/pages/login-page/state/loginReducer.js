import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// Api
import { api } from '../../../api';

const initialState = {
  login: { password: '', email: '' },
  isRegistered: null,
  isLoading: false,
  error: null,
};

export const checkUserAsync = createAsyncThunk(
  'login/loginFetchAsync',
  async (credentials, thunkAPI) => {
    thunkAPI.dispatch(loginReducer.actions.startFetching);
    const response = await api.users.login(credentials);
    if (response.status === 200) {
      const results = await response.json();

      thunkAPI.dispatch(loginReducer.setUserStatus(results));
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
    startFetching: state => {
      state.isLoading = true;
    },
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
      state.isRegistered = action.payload;
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
