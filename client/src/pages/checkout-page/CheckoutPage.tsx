import React from 'react';
// Context
import { usePizza } from '../../PizzaContext';
// Data
import { DEFAULT_PIZZA } from '../../pizzaData';
// Components
import { CheckoutForm, CheckoutPreview } from './components';

export const CheckoutPage = () => {
  const PizzaContext = usePizza();

  return (
    <>
      <h1>Оформление заказа</h1>

      <CheckoutPreview pizza={PizzaContext!.pizza} />
      <CheckoutForm defaultPizza={DEFAULT_PIZZA} pizza={PizzaContext!.pizza} />
    </>
  );
};
