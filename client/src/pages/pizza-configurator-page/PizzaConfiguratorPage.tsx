import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { usePizza } from '../../PizzaContext';
import { useDispatch, useSelector } from 'react-redux';
// ReduxActions
import { ingredientsActions } from './state-ingredients/actions';
// Types
import { PizzaConfiguration } from '../../types';
// Components
import { PizzaForm } from './components/PizzaForm';
// Selectors
import {
  getIngredients,
  getIngredientsByCategory,
} from './state-ingredients/selectors';

/**
 * @param _usePizzaHook simplifies context testing
 */
export const PizzaConfiguratorPage = ({ _usePizzaHook = usePizza }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const PizzaContext = _usePizzaHook();
  const setPizza = PizzaContext?.setPizza;

  /**
   * Get ingredients fron server when conponent render first time
   */
  useEffect(() => {
    dispatch(ingredientsActions.fetchIngredientsAsync());
  }, [dispatch]);

  const ingredients = useSelector(getIngredients);

  const size = useSelector(getIngredientsByCategory('size'));
  const dough = useSelector(getIngredientsByCategory('dough'));
  const sauce = useSelector(getIngredientsByCategory(' sauces'));
  const cheese = useSelector(getIngredientsByCategory('cheese'));
  const vegetables = useSelector(getIngredientsByCategory('vegetables'));
  const meat = useSelector(getIngredientsByCategory('meats'));

  const onPizzaChange = (pizza: PizzaConfiguration): void => {
    if (setPizza) {
      setPizza(pizza);
      history.push('/order-preview');
    }
  };

  return (
    <>
      <h1>Страница кофигуратора пиццы</h1>
      <PizzaForm onPizzaCreated={onPizzaChange} />
    </>
  );
};
