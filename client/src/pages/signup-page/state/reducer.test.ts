import { signupReducer } from './reducer';
import { mockLogin } from '../../../__mock__/login';
import { actionTypes } from './actionTypes';

const initialState = {
  error: null,
  isRegistered: null,
  isLoading: false,
  login: { password: '', email: '' },
};

describe('signupReducer', () => {
  it('fill data of user into state', () => {
    const action = {
      type: actionTypes.SIGNUP_FILL,
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

  it("set status registration of user", () => {
    const action = {
      type: actionTypes.SIGNUP_SET_STATUS,
      payload: true,
      error: null,
    }

    expect(signupReducer(initialState, action)).toEqual({
      login: {
        password: '',
        email: '',
      },
      error: null,
      isRegistered: true,
      isLoading: false,
    });
  })
});
