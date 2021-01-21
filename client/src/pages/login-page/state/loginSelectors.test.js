import { getStatus } from './loginSelectors';
import { mockState } from '../../../testUtils/mockState';

describe('.getStatus', () => {
  it('returns login status of user from state', () => {
    expect(getStatus(mockState)).toEqual(false);
  });
});
