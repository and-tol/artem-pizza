import { OrdersState, OrdersAction } from '../../../types';

const initialState: OrdersState = {
  orders: [],
};

export const ordersListReducer = (
  state = initialState,
  action: OrdersAction
) => {
  switch (action.type) {
    case 'typeName':
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
