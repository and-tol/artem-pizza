import { mockDefaultPizza as mockPizza } from '../../../__mock__/defaulPizza';
import { actionTypes } from './actionTypes';
import { ordersListActions } from './actions';

const mockOrders = [
  {
    pizza: mockPizza,
    address: 'test1',
    cardName: 'test1',
    cardNumber: 'test1',
  },
  {
    pizza: mockPizza,
    address: 'test2',
    cardName: 'test2',
    cardNumber: 'test2',
  },
];

describe('actions', () => {
  it('create an action that fills data of orders to store', () => {
    const expectedAction = {
      type: actionTypes.ORDERS_FILL,
      payload: mockOrders,
    };

    expect(ordersListActions.fillOrders(mockOrders)).toEqual(expectedAction);
  });
});

describe('thunk fetchOrdersAsync', () => {
  jest.mock('../../../api', () => {
    return {
      api: {
        getAllOrders: {
          login: async () => {
            return mockOrders;
          },
        },
      },
    };
  });

  const dispatch = jest.fn();

  it.skip('fetches orders and dispatches ORDERS_FILL action with its data', async () => {
    const expectedActions = [
      { type: actionTypes.ORDERS_START_FETCHING },
      { type: actionTypes.ORDERS_FILL, orders: mockOrders },
      { type: actionTypes.ORDERS_STOP_FETCHING },
    ];

    await ordersListActions.fetchOrdersAsync()(dispatch);

    expect(dispatch).toBeCalledWith(expectedActions);

    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: actionTypes.ORDERS_FETCH_ASYNC,
      orders: mockOrders,
    });
  });
});
