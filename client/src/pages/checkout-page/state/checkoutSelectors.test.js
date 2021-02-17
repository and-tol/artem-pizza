import { mockState } from '../../../testUtils/mockState'
import { getOrder } from './checkoutSelectors'

describe('.getOrder', () => {
  it('returns accepted status from initial state', () => {
    expect(getOrder(mockState)).toEqual(null);
  });
});
