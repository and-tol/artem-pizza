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
  DEFAULT_PIZZA,
} from '../../../pizzaData';
// Types
import { PizzaConfiguration } from '../../../types';
// Helpers
import { renderIngredient } from '../../../share/renderIngredient';

interface CheckoutPreviewProps {
  pizza: PizzaConfiguration;
}

export const CheckoutPreview: React.FC<CheckoutPreviewProps> = ({ pizza }) => {
  const { size, dough, sauce, cheese, vegetables, meat } = pizza;

  return (
    <>
      <section>
        <h3>Ленивая Маргарита</h3>
        <p>
          <span>{SIZE[size].name}</span> см на
          <span> {DOUGH[dough].case.toLowerCase()} </span>
          тесте <span>{` • ${SAUCE[sauce].name}`}</span> соус
          <span>
             {cheese?.length ? ` • ${renderIngredient(cheese, CHEESE)}` : null}
          </span>
          <span>
            {vegetables?.length
              ? ` • ${renderIngredient(vegetables, VEGETABLES)}`
              : null}
          </span>
          <span>
            {' '}
            {meat?.length ? ` • ${renderIngredient(meat, MEAT)}` : null}
          </span>
        </p>

        <hr />
        <p>{calculateTotalPrice(pizza)} руб.</p>
      </section>
    </>
  );
};
