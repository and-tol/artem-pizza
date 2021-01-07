import React from 'react';
import { useSelector } from 'react-redux';
// Helpers
import { calculateTotalPrice } from '../../share/calculateTotalPrice';
import { OrderPreview } from '../../share/components/OrderPreview';
import { getIngredients } from '../pizza-configurator-page/state-ingredients/selectors';
// Selectors
import { getPizza } from '../pizza-configurator-page/state-pizza/selectors';
// Components
import { CheckoutForm } from './components';

export const CheckoutPage = (props: any) => {
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
