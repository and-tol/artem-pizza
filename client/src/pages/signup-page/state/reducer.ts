// Types
import { SignupAction, SignupState } from '../../../types';
import { actionTypes } from './actionTypes';

const initialState: SignupState = {
  error: null,
  isRegistered: null,
  isLoading: false,
  login: { password: '', email: '' },
};

export const signupReducer = (
  state = initialState,
  action: SignupAction
): SignupState => {
  switch (action.type) {
    case actionTypes.SIGNUP_START_FETCHING:
      return { ...state, isLoading: true };
    case actionTypes.SIGNUP_STOP_FETCHING:
      return { ...state, isLoading: false };
    case actionTypes.SIGNUP_SET_FETCHING_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case actionTypes.SIGNUP_SET_STATUS:
      return {
        ...state,
        isLoading: false,
        isRegistered: action.payload,
        error: null,
      };
    case actionTypes.SIGNUP_FILL:
      return {
        ...state,
        isLoading: false,
        login: action.payload,
      };

    default:
      return state;
  }
};
