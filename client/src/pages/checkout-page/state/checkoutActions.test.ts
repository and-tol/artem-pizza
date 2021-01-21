import { mockDefaultPizza } from '../../../testUtils/mockDefaultPizza';
import { checkoutActions } from './checkoutActions';
import { checkoutActionTypes } from './checkoutActionTypes';

jest.mock('../../../api', () => {
  return {
    api: {
      orders: {
        createOrder: () => {
          const response = {status: 200}
          // if (true) {
            return { message: 'Success' };
          // }
        },
      },
    },
  };
});

const order = {
  pizza: mockDefaultPizza,
  address: 'test',
  name: 'test',
  card_number: 'test',
  id: 'test',
};

describe('.sendOrderAsync', () => {
  //  TODO: test -> sends order data and dispatches actions
  it.skip('sends order data and dispatches actions', async () => {
    const dispatch = jest.fn();

    await checkoutActions.sendOrderAsync(order)(dispatch);

    const expectedActions = [
      { type: checkoutActionTypes.CHECKOUT_START_FETCHING },
      { type: checkoutActionTypes.CHECKOUT_FILL, payload: 'Success' },
      { type: checkoutActionTypes.CHECKOUT_STOP_FETCHING },
    ];

    expect(dispatch).toHaveBeenCalledTimes(3);

    expect(dispatch).toBeCalledWith(expectedActions);
  });
});

describe('actions', () => {
  it('creates an action that fills data to store', () => {
    const test = {
      pizza: mockDefaultPizza,
      address: 'test',
      name: 'test',
      card_number: 'test',
    };

    const expectedAction = {
      type: checkoutActionTypes.CHECKOUT_FILL,
      payload: test,
    };

    expect(checkoutActions.fillOrder(test)).toEqual(expectedAction);
  });
});
