import { getStatus } from './selectors';
import { state as mockState } from '../../../__mock__/state';

describe('.getStatus', () => {
  it('retern status of user registration', () => {
    expect(getStatus(mockState)).toEqual(null);
  });
});
