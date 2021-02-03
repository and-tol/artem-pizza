import React from 'react';
import { useSelector } from 'react-redux';
// Selectors
import { getIngredients } from '../pizza-configurator-page/state-ingredients/ingredientsSelectors';
import { getPizza } from '../pizza-configurator-page/state-pizza/pizzaSelectors';

// Components
import { CheckoutForm } from './components';

export const CheckoutPage = () => {
  const pizza = useSelector(getPizza);
  const ingredients = useSelector(getIngredients);

  return (
    <>
      <h1>Оформление заказа</h1>
      <CheckoutForm pizza={pizza} ingredients={ingredients} />
    </>
  );
};
