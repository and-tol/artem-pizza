import { state } from '../../../__mock__/state';
import { getOrders, getLoadingStatus } from './selectors';

describe('.getOrders', () => {
  it('return data of the orders from store', () => {
    expect(getOrders(state)).toEqual([]);
  });
});

describe('.getLoadingStatus', () => {
  it('return loading status', () => {
    expect(getLoadingStatus(state)).toEqual(false);
  });
});
