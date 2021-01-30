import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
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
      <PizzaForm onPizzaOrder={onPizzaOrder} />
    </>
  );
};
