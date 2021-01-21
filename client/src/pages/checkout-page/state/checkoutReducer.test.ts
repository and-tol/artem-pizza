import { checkoutActionTypes } from './checkoutActionTypes';
import { checkoutReducer } from './checkoutReducer';

const initialState = {
  order: null,
  error: null,
  isLoading: false,
  isAccepted: true,
};

describe('checkoutReducer', () => {
  it('set initial state', () => {
    const action = {
      type: checkoutActionTypes.CHECKOUT_FILL,
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
      type: checkoutActionTypes.CHECKOUT_FILL,
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
