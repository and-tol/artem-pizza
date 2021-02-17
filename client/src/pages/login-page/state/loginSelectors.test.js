import { getUserStatus } from './loginSelectors';
import { mockState } from '../../../testUtils';

describe('.getUserStatus', () => {
  it('returns login status of user from state', () => {
    expect(getUserStatus(mockState)).toEqual(false);
  });
});
