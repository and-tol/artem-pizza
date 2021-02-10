import { DEFAULT_PIZZA } from '../pizzaData';

export const calculateTotalPrice = (ingredients, pizza = DEFAULT_PIZZA) => {
  const { size, cheese, vegetables, meat } = pizza;

  const SIZE = ingredients.filter(i => i.category === 'size');
  const CHEESE = ingredients.filter(i => i.category === 'cheese');
  const VEGETABLES = ingredients.filter(i => i.category === 'vegetables');
  const MEAT = ingredients.filter(i => i.category === 'meat');

  let sizePrice = 0;
  if (SIZE.length) {
    sizePrice = SIZE.filter(i => i.slug === size)[0]?.price;
  }

  let cheesePrice = 0;
  if (cheese !== undefined && CHEESE.length && cheese.length) {
    cheesePrice = cheese.reduce(
      (price, cheese) =>
        price + CHEESE.filter(i => i.slug === cheese)[0]?.price,
      0
    );
  }

  let vegetablesPrice = 0;
  if (vegetables !== undefined && VEGETABLES.length && vegetables.length) {
    vegetablesPrice = vegetables.reduce(
      (price, vegetables) =>
        price + VEGETABLES.filter(i => i.slug === vegetables)[0]?.price,
      0
    );
  }

  let meatPrice = 0;
  if (meat !== undefined && MEAT.length && meat.length) {
    meatPrice = meat.reduce(
      (price, meat) => price + MEAT.filter(i => i.slug === meat)[0]?.price,
      0
    );
  }

  return sizePrice + cheesePrice + vegetablesPrice + meatPrice;
};
