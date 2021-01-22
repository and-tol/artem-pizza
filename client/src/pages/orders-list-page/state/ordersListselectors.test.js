import { mockState } from '../../../testUtils/mockState';
import { getOrders, getLoadingStatus } from './ordersListselectors';

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
