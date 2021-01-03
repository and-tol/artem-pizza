import React from 'react';
import { useSelector } from 'react-redux';
// Selectors
import { getPizza } from '../pizza-configurator-page/state-pizza/selectors';
import { getIngredients } from '../pizza-configurator-page/state-ingredients/selectors';
// Components
import { CheckoutForm, OrderPreview } from './components';
// Helpers
import { calculateTotalPrice} from '../../share/calculateTotalPrice'

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
