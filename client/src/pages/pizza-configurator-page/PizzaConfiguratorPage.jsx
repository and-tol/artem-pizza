import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Components
import { PizzaForm } from './components/PizzaForm';
// Actions
import { fetchIngredientsAsync } from './state-ingredients/ingredientsReducer';
import { pizzaReducer } from './state-pizza/pizzaReducer';

export const PizzaConfiguratorPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchIngredientsAsync());
  }, [dispatch]);

  /**
   * Function add pizza to store and go to Checkout Page
   * @param pizza created pizza comfiguration
   */
  const onPizzaOrder = pizza => {
    dispatch(pizzaReducer.actions.fillPizza(pizza));
    history.push('/checkout');
  };

  return (
    <>
      <h1>Страница кофигуратора пиццы</h1>
      <h3>Маргарита</h3>
      <PizzaForm onPizzaOrder={onPizzaOrder} />
    </>
  );
};
