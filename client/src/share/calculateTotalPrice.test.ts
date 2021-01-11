// Types
import { PizzaConfiguration } from '../types';
import { calculateTotalPrice } from './calculateTotalPrice';

const ingredients = [
  {
    id: '0',
    name: '30',
    slug: '30',
    price: 200,
    category: 'size',
    image: '',
    thumbnail: '',
  },
  {
    id: '0',
    name: '35',
    slug: '35',
    price: 250,
    category: 'size',
    image: '',
    thumbnail: '',
  },
  {
    category: 'dough',
    id: '1',
    image: '',
    name: 'Тонкое',
    price: 0,
    slug: 'thin',
    thumbnail: '',
  },
  {
    category: 'sauce',
    id: '2',
    image: '',
    name: 'Томатный',
    price: 0,
    slug: 'tomato-sauce',
    thumbnail: '',
  },
];

describe('calculateTotalPrice', () => {
  it('returns the sum wwithout ingredients with size 30cm', () => {
    const pizza: PizzaConfiguration = {
      size: '30',
      dough: 'thin',
      sauce: 'tomato',
      cheese: [],
      vegetables: [],
      meat: [],
    };

    expect(calculateTotalPrice(ingredients, pizza)).toEqual(200);
  });
  it('returns the sum when all possible ingredients are selected with size 35cm', () => {
    const pizza: PizzaConfiguration = {
      size: '35',
      dough: 'thin',
      sauce: 'tomato',
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
    };

    expect(calculateTotalPrice(ingredients, pizza)).toEqual(250);
  });
});
