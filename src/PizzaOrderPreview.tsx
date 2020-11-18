import React, { FC } from 'react';
// Types
import { PizzaConfiguration } from './types';
// Data
import { SIZE, DOUGH, SAUCE, CHEESE, VEGETABLES, MEAT } from './pizzaData';
interface PizzaOrderPreviewProps {
  pizza: PizzaConfiguration;
}

export const PizzaOrderPreview: FC<PizzaOrderPreviewProps> = ({ pizza }) => {
  const { size, dough, sauce, cheese, vegetables, meat } = pizza;

  return (
    <section>
      <h2>Ленивая Маргарита</h2>
      <p>Размер: {SIZE[size].name}см</p>
      <p>Тесто: {DOUGH[dough].name.toLowerCase()}</p>
      <p>Соус: {SAUCE[sauce].name.toLowerCase()}</p>
      <p>Сыр: {cheese?.map(c => CHEESE[c].name.toLowerCase()).join(', ')} </p>
      <p>Овощи: {vegetables?.map(v => VEGETABLES[v].name.toLowerCase()).join(', ')} </p>
      <p>Мясо: {meat?.map(m => MEAT[m].name.toLowerCase()).join(', ')} </p>
    </section>
  );
};
