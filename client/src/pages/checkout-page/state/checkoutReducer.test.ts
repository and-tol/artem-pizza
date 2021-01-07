import { checkoutReducer } from './reducer'
import {actionTypes} from './actionTypes'

const initialState = {
  data: null,
  error: null,
  isLoading: false,
  isAccepted: true,
}

describe('checkoutReducer', () => {
  it('checks initial state', () => {
    const action = {
      type: actionTypes.CHECKOUT_FILL,
      payload: initialState,
      error: null
    }

    expect(checkoutReducer(initialState, action)).toEqual({
      data: null,
      error: null,
      isLoading: false,
      isAccepted: true,
    })
});


