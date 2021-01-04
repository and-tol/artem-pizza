import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// ReduxActions
import { ingredientsActions } from './state-ingredients/actions';
import { pizzaConfiguratorActions } from './state-pizza/actions';
// Selectors
import { getPizza } from './state-pizza/selectors';
import { getIngredients } from './state-ingredients/selectors';
// Types
import { PizzaConfiguration } from '../../types';
// Components
import { PizzaForm } from './components/PizzaForm';
import { OrderPreview } from '../../share/components/OrderPreview';

/**
 * @param _usePizzaHook simplifies context testing
 */
export const PizzaConfiguratorPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const pizza = useSelector(getPizza);
  const ingredients = useSelector(getIngredients);

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
      <h3>Маргарита</h3>
      <OrderPreview pizza={pizza} ingredients={ingredients} />
      <PizzaForm onPizzaCreated={onPizzaChange} />
    </>
  );
};
