// Types
import { CheckoutAction, CheckoutState } from '../../../types';
// ActionTypes
import { checkoutActionTypes } from './checkoutActionTypes';

export const initialState: CheckoutState = {
  order: null,
  error: null,
  isLoading: false,
  isAccepted: true,
};

export const checkoutReducer = (
  state = initialState,
  action: CheckoutAction
): CheckoutState => {
  switch (action.type) {
    case checkoutActionTypes.CHECKOUT_START_FETCHING:
      return { ...state, isLoading: true };
    case checkoutActionTypes.CHECKOUT_STOP_FETCHING:
      return { ...state, isLoading: false };
    case checkoutActionTypes.CHECKOUT_SET_FETCHING_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case checkoutActionTypes.CHECKOUT_FILL:
      return {
        ...state,
        isLoading: false,
        order: action.payload,
      };
    case checkoutActionTypes.CHECKOUT_SET_ACCEPT:
      return {
        ...state,
        error: null,
        isLoading: false,
        isAccepted: action.payload,
      };

    default:
      return state;
  }
};
