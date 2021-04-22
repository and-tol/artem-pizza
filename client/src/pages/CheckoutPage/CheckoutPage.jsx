import React from 'react';
import { useSelector } from 'react-redux';
// Selectors
import { getIngredients } from '../PizzaConfiguratorPage/state-ingredients/ingredientsSelectors';
import { getPizza } from '../PizzaConfiguratorPage/state-pizza/pizzaSelectors';

// Components
import { CheckoutForm } from './components';

export const CheckoutPage = () => {
  const pizza = useSelector(getPizza);
  const ingredients = useSelector(getIngredients);

  return <CheckoutForm pizza={pizza} ingredients={ingredients} />;
};
