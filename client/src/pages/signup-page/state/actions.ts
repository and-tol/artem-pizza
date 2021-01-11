// Api
import { api } from '../../../api';
// Types
import { ErrorState } from '../../../types';
// ActionTypes
import { actionTypes } from './actionTypes';

export const signupActions = Object.freeze({
  startFetching: () => {
    return { type: actionTypes.SIGNUP_START_FETCHING };
  },
  stopFetching: () => {
    return {
      type: actionTypes.SIGNUP_STOP_FETCHING,
    };
  },
  setFetchingError: (error: ErrorState) => {
    return {
      type: actionTypes.SIGNUP_SET_FETCHING_ERROR,
      payload: error,
    };
  },

  setUserStatus: (status: any) => {
    return {
      type: actionTypes.SIGNUP_SET_STATUS,
      payload: status,
    };
  },

  fillUserData: (payload: any) => {
    return {
      type: actionTypes.SIGNUP_FILL,
      payload,
    };
  },

  /**
   * User check registation
   * @param login -> password, email
   */
  userRegistationAsync: (login: any) => async (dispatch: any) => {
    dispatch(signupActions.startFetching());

    const response = await api.users.create(login);
    if (response.status === 200) {
      const results = await response.json();

      dispatch(signupActions.setUserStatus(results));
    } else {
      const error = {
        status: response.status,
      };
      dispatch(signupActions.setFetchingError(error));
    }
    dispatch(signupActions.stopFetching());
  },
});
