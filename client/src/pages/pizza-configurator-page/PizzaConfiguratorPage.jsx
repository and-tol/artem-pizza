import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { OrderPreview } from '../../share/components/OrderPreview';
// Components
import { PizzaForm } from './components/PizzaForm';
// Actions
import { fetchIngredientsAsync } from './state-ingredients/ingredientsReducer';
import { pizzaReducer } from './state-pizza/pizzaReducer';
// Selectors
import { getIngredients } from './state-ingredients/ingredientsSelectors';
import { getPizza } from './state-pizza/pizzaSelectors';

export const PizzaConfiguratorPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const pizza = useSelector(getPizza);
  const ingredients = useSelector(getIngredients);

  useEffect(() => {
    dispatch(fetchIngredientsAsync());
  }, [dispatch]);

  /**
   * Component add pizza to store and go to OrderPreview Page
   * @param pizza created pizza comfiguration
   */
  const onPizzaChange = pizza => {
    dispatch(pizzaReducer.actions.fillPizza(pizza));
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
