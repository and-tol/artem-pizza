import { calculateTotalPrice } from './calculateTotalPrice';
describe('calculateTotalPrice', () => {
  it('returns the sum when all possible ingredients are selected with size 30cm', () => {
    expect(
      calculateTotalPrice({
        size: '30',
        cheese: ['mozarella', 'cheddar', 'dorblue'],
        vegetables: [
          'tomato',
          'mushrooms',
          'pepper',
          'pineapple',
          'olives',
          'onion',
          'broccoli',
        ],
        meat: ['bacon', 'pepperoni', 'ham'],
      })
    ).toEqual(577);
  });
  it('returns the sum when all possible ingredients are selected with size 35cm', () => {
    expect(
      calculateTotalPrice({
        size: '35',
        cheese: ['mozarella', 'cheddar', 'dorblue'],
        vegetables: [
          'tomato',
          'mushrooms',
          'pepper',
          'pineapple',
          'olives',
          'onion',
          'broccoli',
        ],
        meat: ['bacon', 'pepperoni', 'ham'],
      })
    ).toEqual(627);
  });
});
