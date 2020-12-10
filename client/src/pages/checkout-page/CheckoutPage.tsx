import React from 'react';
// Context
import { usePizza } from '../../PizzaContext';
// Components
import { CheckoutPreview } from './components';
import { CheckoutForm } from './components';

export const CheckoutPage = () => {
  const { pizza } = usePizza();

  return (
    <>
      <h1>Оформление заказа</h1>

      <CheckoutPreview pizza={pizza} />
      <CheckoutForm />
    </>
  );
};
