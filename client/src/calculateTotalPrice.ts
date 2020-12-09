import { TotalPrice } from './types';
import { SIZE, CHEESE, VEGETABLES, MEAT } from './pizzaData';

export const calculateTotalPrice = (pizza: TotalPrice): number => {
  const { size, cheese, vegetables, meat } = pizza;

  const sizePrice: number = SIZE[size].price;

  const cheesePrice: number = cheese.reduce(
    (price: number, cheese: string) => price + CHEESE[cheese].price,
    0
  );

  const vegetablesPrice: number = vegetables.reduce(
    (price: number, vegetables: string) => price + VEGETABLES[vegetables].price,
    0
  );

  const meatPrice: number = meat.reduce(
    (price: number, meat: string) => price + MEAT[meat].price,
    0
  );

  return sizePrice + cheesePrice + vegetablesPrice + meatPrice;
};
