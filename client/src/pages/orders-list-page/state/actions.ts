// ActionTypes
import { actionTypes } from './actionTypes';
// Types
import { Order, ErrorState } from '../../../types';
// Api
import { api } from '../../../api';

export const ordersListActions = Object.freeze({
  startFetching: () => {
    return {
      type: actionTypes.ORDERS_START_FETCHING,
    };
  },
  stopFetching: () => {
    return {
      type: actionTypes.ORDERS_STOP_FETCHING,
    };
  },
  setFetchingError: (error: ErrorState) => {
    return {
      type: actionTypes.ORDERS_SET_FETCHING_ERROR,
      payload: error,
    };
  },

  fillOrders: (payload: Order[] | []) => {
    return {
      type: actionTypes.ORDERS_FILL,
      payload,
    };
  },

  // Async
  fetchOrdersAsync: () => async (dispatch: any) => {
    dispatch(ordersListActions.startFetching);

    const response = await api.orders.showAllOrders();

    if (response.status === 200) {
      const results = await response.json();

      dispatch(ordersListActions.fillOrders(results));
    } else {
      const error = {
        status: response.status,
      };

      dispatch(ordersListActions.setFetchingError(error));
    }

    dispatch(ordersListActions.stopFetching());
  },
});
