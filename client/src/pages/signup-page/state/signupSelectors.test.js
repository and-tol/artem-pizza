import { getStatus } from './signupSelectors';
import { mockState } from '../../../testUtils/mockState';

describe('.getStatus', () => {
  it('retern status of user registration', () => {
    expect(getStatus(mockState)).toEqual(null);
  });
});
