import { mockState } from '../../../testUtils/mockState'
import { getOrder } from './checkoutSelectors'

describe('.getOrder', () => {
  it('returns accepted status from state', () => {
    expect(getOrder(mockState)).toEqual(true);
  });
});
