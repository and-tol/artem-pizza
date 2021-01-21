import { actionTypes } from './actionTypes';
import { signupActions } from './actions';
import { mockLogin as mockSignup } from '../../../__mock__/login';

describe('actions', () => {
  it('create an action that fill data of user to store', () => {
    const expectedAction = {
      type: actionTypes.SIGNUP_FILL,
      payload: mockSignup,
    };

    expect(signupActions.fillUserData(mockSignup)).toEqual(expectedAction);
  });
});

describe('thunk actions', () => {
  describe('.userRegistationAsync', () => {
    it.skip('fetch user registration and dispatch SIGNUP_FETCH_ASYNC action with its data', async () => {
      jest.mock('../../../api', () => {
        return {
          api: {
            users: {
              create: data => {
                return 'true';
              },
            },
          },
        };
      });

      const dispatch = jest.fn();
      const expectedAction = [
        { type: actionTypes.SIGNUP_START_FETCHING },
        {
          type: actionTypes.SIGNUP_SET_STATUS,
          isRegistered: true,
        },
        { type: actionTypes.SIGNUP_STOP_FETCHING },
      ];

      await signupActions.userRegistationAsync(mockSignup)(dispatch);
    });
  });
});
