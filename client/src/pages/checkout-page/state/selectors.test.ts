import { getAcceptedOrder } from './selectors';
import { state } from '../../../__mock__/state';

describe('.getAcceptedOrder', () => {
  it('returns accepted status from state', () => {
    expect(getAcceptedOrder(state)).toEqual(true);
  });
});
