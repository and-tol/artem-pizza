import { actionTypes } from './actionTypes';
import { checkoutReducer } from './reducer';

const initialState = {
  order: null,
  error: null,
  isLoading: false,
  isAccepted: true,
};

describe('checkoutReducer', () => {
  it('set initial state', () => {
    const action = {
      type: actionTypes.CHECKOUT_FILL,
      payload: null,
      error: null,
    };

    expect(checkoutReducer(initialState, action)).toEqual({
      order: null,
      error: null,
      isLoading: false,
      isAccepted: true,
    });
  });
  it('is fill data into state', () => {
    const action = {
      type: actionTypes.CHECKOUT_FILL,
      payload: { test: 'test' },
      error: null,
    };

    expect(checkoutReducer(initialState, action)).toEqual({
      order: { test: 'test' },
      error: null,
      isLoading: false,
      isAccepted: true,
    });
  });
});
