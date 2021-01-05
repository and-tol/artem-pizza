import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { OrderPreview } from '../../share/components/OrderPreview';
// Types
import { PizzaConfiguration } from '../../types';
// Components
import { PizzaForm } from './components/PizzaForm';
// ReduxActions
import { ingredientsActions } from './state-ingredients/actions';
import { getIngredients } from './state-ingredients/selectors';
import { pizzaConfiguratorActions } from './state-pizza/actions';
// Selectors
import { getPizza } from './state-pizza/selectors';

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

  /**
   * Function add pizza to store and go to OrderPreview Page
   * @param pizza created pizza comfiguration
   */
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
