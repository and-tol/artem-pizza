// Api
import { api } from '../../../api';
// ActionTypes
import { checkoutActionTypes } from './checkoutActionTypes';
// Types
import { ErrorState, IOrder } from '../../../types';

export const checkoutActions = Object.freeze({
  startFetching: () => {
    return { type: checkoutActionTypes.CHECKOUT_START_FETCHING };
  },
  stopFetching: () => {
    return {
      type: checkoutActionTypes.CHECKOUT_STOP_FETCHING,
    };
  },
  setFetchingError: (error: ErrorState) => {
    return {
      type: checkoutActionTypes.CHECKOUT_SET_FETCHING_ERROR,
      payload: error,
    };
  },

  fillOrder: (payload: IOrder) => {
    return {
      type: checkoutActionTypes.CHECKOUT_FILL,
      payload,
    };
  },
  setAccept: (payload: string) => {
    return {
      type: checkoutActionTypes.CHECKOUT_SET_ACCEPT,
      payload,
    };
  },

  // Async
  sendOrderAsync: (data: IOrder) => async (dispatch: any) => {
    dispatch(checkoutActions.startFetching());

    const response = await api.orders.createOrder(data);
    if (response.status === 200) {
      const { message } = await response.json();

      dispatch(checkoutActions.setAccept(message));
    } else {
      const error = {
        status: response.status,
      };
      dispatch(checkoutActions.setFetchingError(error));
    }
    dispatch(checkoutActions.stopFetching());
  },
});
