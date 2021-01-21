import { loginActions } from './loginActions';
import { actionTypes } from './loginActionTypes';

jest.mock('../../../api', () => {
  return {
    api: {
      orders: {
        login: async () => {
          return 'Success';
        },
      },
    },
  };
});

describe('loginActions', () => {
  it('creates an action fills data to store', () => {
    const test = {
      login: { password: 'test', email: 'test' },
    };

    const expectedAction = {
      type: actionTypes.LOGIN_FILL,
      payload: test,
    };

    expect(loginActions.fillUserData(test)).toEqual(expectedAction);
  });

  describe('.checkUserAsync', () => {
    const credentials = { password: 'test', email: 'email' };
    it.skip('is checking user registration', async () => {
      const dispatch = jest.fn();
      const credentials = {
        login: { password: 'test', email: 'test' },
      };

      await loginActions.checkUserAsync(credentials.login)(dispatch);

      const expectedActions = [
        { type: actionTypes.LOGIN_START_FETCHING },
        { type: actionTypes.LOGIN_SET_STATUS, payload: 'Success' },
        { type: actionTypes.LOGIN_STOP_FETCHING },
      ];

      expect(dispatch).toHaveBeenCalledTimes(3);

      // expect(dispatch).toHaveNthReturnedWith(2, {
      //   error: null,
      //   isRegistered: 'Success',
      //   isLoading: false,
      //   login: { name: 'test', email: 'test' },
      // });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: actionTypes.LOGIN_FETCH_ASYNC,
        login: {
          error: null,
          isRegistered: 'Success',
          isLoading: false,
          login: { name: 'test', email: 'test' },
        },
      });
    });
  });
});
