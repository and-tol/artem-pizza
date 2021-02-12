import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
// Components
import { PizzaForm } from './components'
// Actions
import { fetchIngredientsAsync } from './state-ingredients/ingredientsReducer'
import { pizzaReducer } from './state-pizza/pizzaReducer'

const PageTitle = styled.h1`
  width: 100%;
  padding-left: var(--padding-glob);
`;

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
      <PageTitle>Собери свою пиццу</PageTitle>
      <PizzaForm onPizzaOrder={onPizzaOrder} />
    </>
  );
};
