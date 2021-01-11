// ActionTypes
import { actionTypes } from './actionTypes';
// Types
import { ErrorState } from '../../../types';
import { api } from '../../../api';

export const loginActions = Object.freeze({
  startFetching: () => {
    return { type: actionTypes.LOGIN_START_FETCHING };
  },
  stopFetching: () => {
    return {
      type: actionTypes.LOGIN_STOP_FETCHING,
    };
  },
  setFetchingError: (error: ErrorState) => {
    return {
      type: actionTypes.LOGIN_SET_FETCHING_ERROR,
      payload: error,
    };
  },

  setUserStatus: (status: any) => {
    return {
      type: actionTypes.LOGIN_SET_STATUS,
      payload: status,
    };
  },

  fillUserData: (payload: any) => {
    return {
      type: actionTypes.LOGIN_FILL,
      payload,
    };
  },


  /**
   * Checking user registration
   * @param credentials -> password, email
   */
  checkUserAsync: (credentials: any) => async (dispatch: any) => {
    dispatch(loginActions.startFetching());

    const response = await api.users.login(credentials);
    if (response.status === 200) {
      const results = await response.json();

      dispatch(loginActions.setUserStatus(results));
    } else {
      const error = {
        status: response.status,
      };
      dispatch(loginActions.setFetchingError(error));
    }
    dispatch(loginActions.stopFetching());
  },
});
