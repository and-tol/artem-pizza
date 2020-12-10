import React from 'react';
// Context
import { usePizza } from '../../PizzaContext';
// Data
import {DEFAULT_PIZZA} from '../../pizzaData'
// Components
import { CheckoutPreview } from './components';
import { CheckoutForm } from './components';

export const CheckoutPage = () => {
  const { pizza } = usePizza();

  return (
    <>
      <h1>Оформление заказа</h1>

      <CheckoutPreview pizza={pizza} />
      <CheckoutForm defaultPizza={DEFAULT_PIZZA} pizza={pizza} />
    </>
  );
};
