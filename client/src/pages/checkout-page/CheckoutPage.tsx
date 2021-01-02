import React from 'react';
import { useSelector } from 'react-redux';
// Selectors
import { getPizza } from '../pizza-configurator-page/state-pizza/selectors';
import { getIngredients } from '../pizza-configurator-page/state-ingredients/selectors';
// Components
import { CheckoutForm, CheckoutPreview } from './components';

export const CheckoutPage = () => {
  const pizza = useSelector(getPizza);
  const ingredients = useSelector(getIngredients);

  return (
    <>
      <h1>Оформление заказа</h1>
      <CheckoutPreview pizza={pizza} ingredients={ingredients} />
      <CheckoutForm pizza={pizza} ingredients={ingredients} />
    </>
  );
};
