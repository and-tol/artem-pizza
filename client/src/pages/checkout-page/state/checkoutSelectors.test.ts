import { getAcceptedOrder } from './checkoutSelectors';
import { mockState } from '../../../testUtils/mockState';

describe('.getAcceptedOrder', () => {
  it('returns accepted status from state', () => {
    expect(getAcceptedOrder(mockState)).toEqual(true);
  });
});
