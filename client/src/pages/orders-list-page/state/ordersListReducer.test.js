import { ordersListActionTypes } from './ordersListActionTypes';
import { ordersListReducer } from './ordersListReducer';
import { mockDefaultPizza as mockPizza } from '../../../testUtils/mockDefaultPizza';
import { mockOrder } from './../../../testUtils/mockOrder';

const initialState = {
  orders: [],
  isLoading: false,
  error: null,
};

describe('ordersListReducer', () => {
  it('is fill data of orders into state', () => {
    const mockOrders = [mockOrder];

    const action = {
      type: ordersListActionTypes.ORDERS_FILL,
      payload: mockOrders,
      error: null,
    };

    expect(ordersListReducer(initialState, action)).toEqual({
      orders: [
        {
          pizza: mockPizza,
          address: 'test_address',
          cardName: 'test_name',
          cardNumber: 'test_card_number',
          id: 'test_id',
        },
      ],
      error: null,
      isLoading: false,
    });
  });
});
