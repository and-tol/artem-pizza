import React from 'react';
import { useSelector } from 'react-redux';
// Helpers
import { calculateTotalPrice } from '../../share/calculateTotalPrice';
// Selectors
import { getIngredients } from '../pizza-configurator-page/state-ingredients/ingredientsSelectors';
import { getPizza } from '../pizza-configurator-page/state-pizza/pizzaSelectors';
// Components
import { CheckoutForm, OrderPreview } from './components';

export const CheckoutPage = () => {
  const pizza = useSelector(getPizza);
  const ingredients = useSelector(getIngredients);

  return (
    <>
      <h1>Оформление заказа</h1>
      <OrderPreview pizza={pizza} ingredients={ingredients} />
      <hr />
      <p>{calculateTotalPrice(ingredients, pizza)} руб.</p>
      <CheckoutForm pizza={pizza} ingredients={ingredients} />
    </>
  );
};
