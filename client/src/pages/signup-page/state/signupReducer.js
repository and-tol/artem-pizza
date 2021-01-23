import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// Api
import { api } from '../../../api';

const initialState = {
  error: null,
  isRegistered: null,
  isLoading: false,
  login: { password: '', email: '' },
};

/**
 * Action User check registation
 * @param login -> password, email
 */
export const userSingupAsync = createAsyncThunk(
  'signup/signupFetchAsync',
  async (login, thunkAPI) => {
    thunkAPI.dispatch(signupReducer.actions.startFetching());
    const response = await api.users.create(login);
    if (response.status === 200) {
      const results = await response.json();

      thunkAPI.dispatch(signupReducer.actions.setUserStatus(results));
    } else {
      const error = {
        status: response.status,
      };
      thunkAPI.dispatch(signupReducer.actions.setFetchingError(error));
    }
    thunkAPI.dispatch(signupReducer.actions.stopFetching());
  }
);

export const signupReducer = createSlice({
  name: 'signup',
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
    [userSingupAsync.fulfilled]: (state, action) => {
      state.login = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [userSingupAsync.rejected]: state => {
      state.isLoading = false;
      state.error = {
        status: 'fetching error',
      };
    },
    [userSingupAsync.pending]: state => {
      state.isLoading = true;
    },
  },
});
