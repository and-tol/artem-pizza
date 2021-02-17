import { mockState } from '../../../testUtils';
import { getOrders, getLoadingStatus } from './ordersListSelectors';

describe('.getOrders', () => {
  it('return data of the orders from store', () => {
    expect(getOrders(mockState)).toEqual([]);
  });
});

describe('.getLoadingStatus', () => {
  it('return loading status', () => {
    expect(getLoadingStatus(mockState)).toEqual(false);
  });
});
