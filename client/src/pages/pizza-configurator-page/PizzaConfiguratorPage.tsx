import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// ReduxActions
import { ingredientsActions } from './state-ingredients/actions';
import { pizzaConfiguratorActions } from './state-pizza/actions';
// Types
import { PizzaConfiguration } from '../../types';
// Components
import { PizzaForm } from './components/PizzaForm';

/**
 * @param _usePizzaHook simplifies context testing
 */
export const PizzaConfiguratorPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  /**
   * Get ingredients fron server when component render first time
   */
  useEffect(() => {
    dispatch(ingredientsActions.fetchIngredientsAsync());
  }, [dispatch]);

  const onPizzaChange = (pizza: PizzaConfiguration): void => {
    dispatch(pizzaConfiguratorActions.fillPizza(pizza));
    history.push('/order-preview');
  };

  return (
    <>
      <h1>Страница кофигуратора пиццы</h1>
      <PizzaForm onPizzaCreated={onPizzaChange} />
    </>
  );
};
