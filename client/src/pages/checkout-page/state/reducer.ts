// Types
import { CheckoutState } from '../../../types';
// ActionTypes
import { actionTypes } from './actionTypes';

const initialState: CheckoutState = {
  data: null,
  error: null,
  isLoading: false,
  isAccepted: true,
};

export const checkoutReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.CHECKOUT_START_FETCHING:
      return { ...state, isLoading: true };
    case actionTypes.CHECKOUT_STOP_FETCHING:
      return { ...state, isLoading: false };
    case actionTypes.CHECKOUT_SET_FETCHING_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case actionTypes.CHECKOUT_FILL:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};
