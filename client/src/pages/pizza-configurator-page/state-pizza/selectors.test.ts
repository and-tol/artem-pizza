import { state as mockState } from '../../../__mock__/state';
import { getPizza } from './selectors';

describe('.getPizza', () => {
  it('return data of pizza from store', () => {
    expect(getPizza(mockState)).toEqual({
      size: '30',
      dough: 'thin',
      sauce: 'tomato',
      cheese: [],
      vegetables: [],
      meat: [],
    });
  });
});
