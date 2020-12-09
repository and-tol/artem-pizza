import React from 'react';
// Helpers
import { calculateTotalPrice } from '../../../calculateTotalPrice';
// Data
import {
  CHEESE,
  DOUGH,
  MEAT,
  SAUCE,
  SIZE,
  VEGETABLES,
} from '../../../pizzaData';
// Types
import {
  IngredientNameAndPriceState,
  PizzaConfiguration,
} from '../../../types';

interface CheckoutPreviewProps {
  pizza: PizzaConfiguration;
}

export const CheckoutPreview: React.FC<CheckoutPreviewProps | undefined> = ({
  pizza,
}) => {
  const { size, dough, sauce, cheese, vegetables, meat } = pizza;

  const renderIngredient = (
    ingredients: string[],
    data: IngredientNameAndPriceState
  ): string => {
    const newIngredients: string = ingredients
      ?.map(i => data[i].name.toLowerCase())
      .join(', ');
    return newIngredients[0].toUpperCase() + newIngredients.slice(1);
  };

  return (
    <>
      <section>
        <h3>Ленивая Маргарита</h3>
        <p>
          {SIZE[size].name} см на {DOUGH[dough].case.toLowerCase()} тесте •{' '}
          {SAUCE[sauce].name} соус •
          {cheese.length ? renderIngredient(cheese, CHEESE) : null} •
          {vegetables.length ? renderIngredient(vegetables, VEGETABLES) : null}{' '}
          • {meat.length ? renderIngredient(meat, MEAT) : null}
        </p>

        <hr />
        <p>{calculateTotalPrice(pizza)} руб.</p>
      </section>
    </>
  );
};
