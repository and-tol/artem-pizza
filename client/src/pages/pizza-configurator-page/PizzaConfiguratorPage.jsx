import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { OrderPreview } from '../../share/components/OrderPreview';
// Components
import { PizzaForm } from './components/PizzaForm';
// ReduxActions
import * as ingredientsActions from './state-ingredients/ingredientsActions';
import { getIngredients } from './state-ingredients/ingredientsSelectors';
import * as pizzaActions from './state-pizza/pizzaActions';
// Selectors
import { getPizza } from './state-pizza/pizzaSelectors';

export const PizzaConfiguratorPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const pizza = useSelector(getPizza);
  const ingredients = useSelector(getIngredients);

  useEffect(() => {
    dispatch(ingredientsActions.fetchIngredientsAsync());
  }, [dispatch]);

  /**
   * Component add pizza to store and go to OrderPreview Page
   * @param pizza created pizza comfiguration
   */
  const onPizzaChange = pizza => {
    dispatch(pizzaActions.fillPizza(pizza));
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
