import React, { FC } from 'react';
import { PizzaForm } from './PizzaForm';
// Types
import { PizzaConfiguration } from '../types';

interface PizzaConfiguratorPageProps {
  onPizzaCreated: (pizza: PizzaConfiguration) => void;
}

export const PizzaConfiguratorPage: FC<PizzaConfiguratorPageProps> = ({
  onPizzaCreated,
}) => {
  return (
    <>
      <h1>Страница кофигуратора пиццы</h1>
      <PizzaForm onPizzaCreated={onPizzaCreated} />
    </>
  );
};
