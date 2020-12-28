import React from 'react';
import { PizzaForm } from './PizzaForm';
import { usePizza } from '../../PizzaContext';
import { useHistory } from 'react-router-dom';
import { PizzaConfiguration } from '../../types';

/**
 * @param _usePizzaHook simplifies context testing
 */
export const PizzaConfiguratorPage = ({ _usePizzaHook = usePizza }) => {
  const PizzaContext = _usePizzaHook();
  const setPizza = PizzaContext?.setPizza
  const history = useHistory();

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
