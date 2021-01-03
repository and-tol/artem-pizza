import { Ingredient, PizzaConfiguration } from '../types';

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

  let cheesePrice = 0;
  if (CHEESE.length && cheese !== undefined && cheese.length) {
    cheesePrice = cheese.reduce(
      (price: number, cheese: string) =>
        price + CHEESE.filter(i => i.slug === cheese)[0].price,
      0
    );
  }

  let vegetablesPrice = 0;
  if (VEGETABLES.length && vegetables !== undefined && vegetables.length) {
    vegetablesPrice = vegetables.reduce(
      (price: number, vegetables: string) =>
        price + VEGETABLES.filter(i => i.slug === vegetables)[0].price,
      0
    );
  }

  let meatPrice = 0;
  if (MEAT.length && meat !== undefined && meat.length) {
    meatPrice = meat.reduce(
      (price: number, meat: string) =>
        price + MEAT.filter(i => i.slug === meat)[0].price,
      0
    );
  }

  return sizePrice + cheesePrice + vegetablesPrice + meatPrice;
};
