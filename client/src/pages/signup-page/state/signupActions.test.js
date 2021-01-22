import { signupActionTypes } from './signupActionTypes';
import * as signupActions from './signupActions';
import { mockLogin as mockSignup } from '../../../testUtils/mockLogin';

describe('actions', () => {
  it('create an action that fill data of user to store', () => {
    const expectedAction = {
      type: signupActionTypes.SIGNUP_FILL,
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
        {
          type: signupActionTypes.SIGNUP_SET_STATUS,
          isRegistered: true,
        },
        { type: signupActionTypes.SIGNUP_STOP_FETCHING },
      ];

      await signupActions.userRegistationAsync(mockSignup)(dispatch);
    });
  });
});
