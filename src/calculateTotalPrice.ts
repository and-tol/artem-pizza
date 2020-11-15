import { SIZE, CHEESE, VEGETABLES } from './pizzaData';

type CalculateTotalPriceType = {
  size: string;
  cheese: string[];
  vegetables: string[];
};

export const calculateTotalPrice = ({
  size,
  cheese,
  vegetables,
}: CalculateTotalPriceType): number => {
  const sizePrice: number = SIZE[size].price;

  const cheesePrice: number = cheese.reduce(
    (price: number, cheese: string) => price + CHEESE[cheese].price,
    0
  );

  const vegetablesPrice: number = vegetables.reduce(
    (price: number, vegetables: string) => price + VEGETABLES[vegetables].price,
    0
  );

  return sizePrice + cheesePrice + vegetablesPrice;
};
