import React from 'react';
// Context
import { usePizza } from '../../../PizzaContext';
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
  DEFAULT_PIZZA,
} from '../../../pizzaData';
// Types
import {
  IngredientNameAndPriceState,
  PizzaConfiguration,
} from '../../../types';

interface CheckoutPreviewProps {
  pizza?: PizzaConfiguration;
}

export const CheckoutPreview: React.FC<CheckoutPreviewProps> = ({ pizza }) => {
  const { size, dough, sauce, cheese, vegetables, meat } =
    pizza || DEFAULT_PIZZA;
  console.log('sauce>>>>', SAUCE[sauce].name);

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
          <span>{SIZE[size].name}</span> см на
          <span> {DOUGH[dough].case.toLowerCase()} </span>
          тесте <span> • {SAUCE[sauce].name}</span> соус
          <span>
             {cheese?.length ? `• ${renderIngredient(cheese, CHEESE)}` : null}
          </span>
          <span>
            {vegetables?.length
              ? `• ${renderIngredient(vegetables, VEGETABLES)}`
              : null}
          </span>
          <span>
            {' '}
            {meat?.length ? `• ${renderIngredient(meat, MEAT)}` : null}
          </span>
        </p>

        <hr />
        <p>{calculateTotalPrice((pizza = DEFAULT_PIZZA))} руб.</p>
      </section>
    </>
  );
};
