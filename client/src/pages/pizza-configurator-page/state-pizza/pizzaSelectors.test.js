import { mockState } from '../../../testUtils/mockState';
import { getPizza } from './pizzaSelectors';

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
