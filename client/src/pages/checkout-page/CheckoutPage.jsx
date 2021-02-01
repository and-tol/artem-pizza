import React from 'react';
import { useSelector } from 'react-redux';
// Helpers
import { calculateTotalPrice } from '../../share/calculateTotalPrice';
// Selectors
import { getIngredients } from '../pizza-configurator-page/state-ingredients/ingredientsSelectors';
import { getPizza } from '../pizza-configurator-page/state-pizza/pizzaSelectors';
import { getOrder } from './state/checkoutSelectors';
// Components
import { CheckoutForm } from './components';
import { OrderPreview } from '../../share/components';
import { Order } from '../../share/components';

export const CheckoutPage = () => {
  const pizza = useSelector(getPizza);
  const ingredients = useSelector(getIngredients);
  const order = useSelector(getOrder);

  console.log('order', order)

  return (
    <>
      <h1>Оформление заказа</h1>
      {/* <OrderPreview pizza={pizza} ingredients={ingredients} /> */}
      <Order order={order} pizza={pizza}  />
      <hr />
      <p>{calculateTotalPrice(ingredients, pizza)} руб.</p>
      <CheckoutForm pizza={pizza} ingredients={ingredients} />
    </>
  );
};
