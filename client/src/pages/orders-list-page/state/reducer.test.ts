import { actionTypes } from './actionTypes';
import { ordersListReducer } from './reducer';
import { mockDefaultPizza as mockPizza } from '../../../__mock__/defaulPizza';
import { mockOrder } from './../../../__mock__/order';

const initialState = {
  orders: [],
  isLoading: false,
  error: null,
};

describe('ordersListReducer', () => {
  it('is fill data of orders into state', () => {
    const mockOrders = [mockOrder];

    const action = {
      type: actionTypes.ORDERS_FILL,
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
