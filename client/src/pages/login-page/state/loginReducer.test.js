import { loginActionTypes } from './loginActionTypes';
import { loginReducer } from './loginReducer';

describe('loginReducer', () => {
  const initialState = {
    error: null,
    isRegistered: null,
    isLoading: false,
    login: { name: '', email: '' },
  };

  it('is fill data into state', () => {
    const action = {
      type: loginActionTypes.LOGIN_FILL,
      payload: { name: 'name', email: 'name' },
      error: null,
      isRegistered: null,
    };

    expect(loginReducer(initialState, action)).toEqual({
      error: null,
      isRegistered: null,
      isLoading: false,
      login: { name: 'name', email: 'name' },
    });
  });
});
