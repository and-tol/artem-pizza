import { getStatus } from './signupSelectors';
import { mockState } from '../../../testUtils';

describe('.getStatus', () => {
  it('retern status of user registration', () => {
    expect(getStatus(mockState)).toEqual(null);
  });
});
