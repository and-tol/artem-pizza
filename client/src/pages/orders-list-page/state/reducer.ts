// Types
import { OrdersState, OrdersAction } from '../../../types';
// ActionTypes
import { actionTypes } from './actionTypes';

const initialState: OrdersState = {
  orders: [],
  isLoading: false,
  error: null,
};

export const ordersListReducer = (
  state = initialState,
  action: OrdersAction
) => {
  switch (action.type) {
    case actionTypes.ORDERS_START_FETCHING:
      return { ...state, isLoading: true };
    case actionTypes.ORDERS_STOP_FETCHING:
      return { ...state, isLoading: false };
    case actionTypes.ORDERS_SET_FETCHING_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case actionTypes.ORDERS_FILL:
      return {
        ...state,
        isLoading: false,
        orders: action.payload,
        error: null,
      };

    default:
      return state;
  }
};
