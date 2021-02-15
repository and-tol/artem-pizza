import { loginActionTypes } from './loginActionTypes';
import { loginReducer } from './loginReducer';

import { initialStateMockLogin } from '../../../testUtils';

describe('loginReducer', () => {

  it.skip('is fill data into state', () => {
    const action = {
      type: loginActionTypes.LOGIN_FILL,
      payload: { name: 'name', email: 'email' },
      error: null,
      isRegistered: null,
    };

    expect(loginReducer(initialStateMockLogin, action)).toEqual({
      error: null,
      isRegistered: null,
      isLoading: false,
      login: { name: 'name', email: 'email' },
    });
  });
});
