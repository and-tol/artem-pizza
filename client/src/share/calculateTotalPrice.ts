import { Ingredient,  PizzaConfiguration } from '../types';

export const calculateTotalPrice = (
  ingredients: Ingredient[] | [],
  pizza: PizzaConfiguration
): number => {
  const { size, cheese, vegetables, meat } = pizza;

  const SIZE = ingredients.filter(i => i.category === 'size');
  const CHEESE = ingredients.filter(i => i.category === 'cheese');
  const VEGETABLES = ingredients.filter(i => i.category === 'vegetables');
  const MEAT = ingredients.filter(i => i.category === 'meat');

  let sizePrice = 0;
  if (SIZE.length) {
    sizePrice = SIZE.filter(i => i.slug === size)[0].price;
  }

  const cheesePrice: number = cheese.reduce(
    (price: number, cheese: string) =>
      price + CHEESE.filter(i => i.slug === cheese)[0].price,
    0
  );

  const vegetablesPrice: number = vegetables.reduce(
    (price: number, vegetables: string) =>
      price + VEGETABLES.filter(i => i.slug === vegetables)[0].price,
    0
  );

  const meatPrice: number = meat.reduce(
    (price: number, meat: string) =>
      price + MEAT.filter(i => i.slug === meat)[0].price,
    0
  );

  return sizePrice + cheesePrice + vegetablesPrice + meatPrice;
};
