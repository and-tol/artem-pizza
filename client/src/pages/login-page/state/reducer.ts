import { actionTypes } from './actionTypes';
// Types
import { LoginState, LoginAction } from '../../../types';

const initialState: LoginState = {
  error: null,
  isRegistered: null,
  isLoading: false,
  login: { name:"",email:""}
};

export const loginReducer = (
  state = initialState,
  action: LoginAction
): LoginState => {
  switch (action.type) {
    case actionTypes.LOGIN_START_FETCHING:
      return { ...state, isLoading: true };
    case actionTypes.LOGIN_STOP_FETCHING:
      return { ...state, isLoading: false };
    case actionTypes.LOGIN_SET_FETCHING_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actionTypes.LOGIN_SET_STATUS:
      return {
        ...state,
        isLoading: false,
        isRegistered: action.payload,
        error: null,
      };
    case actionTypes.LOGIN_FILL:
      return {
        ...state,
        isLoading: false,
        login: action.payload,
      };

    default:
      return state;
  }
};
