import { signupReducer } from './signupReducer';
import { mockLogin } from '../../../testUtils';

const initialState = {
  error: null,
  isRegistered: null,
  isLoading: false,
  login: { password: '', email: '' },
};

describe('signupReducer', () => {
  it.skip('fill data of user into state', () => {
    const action = {
      type: signupActionTypes.SIGNUP_FILL,
      payload: mockLogin,
      error: null,
    };

    expect(signupReducer(initialState, action)).toEqual({
      login: {
        password: 'test_password',
        email: 'test_email',
      },
      error: null,
      isRegistered: null,
      isLoading: false,
    });
  });

  it.skip('set status registration of user', () => {
    const action = {
      type: signupActionTypes.SIGNUP_SET_STATUS,
      payload: true,
      error: null,
    };

    expect(signupReducer(initialState, action)).toEqual({
      login: {
        password: '',
        email: '',
      },
      error: null,
      isRegistered: true,
      isLoading: false,
    });
  });
});
