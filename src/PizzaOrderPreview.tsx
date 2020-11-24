import React, { FC } from 'react';
// Types
import { PizzaConfiguration, DataWithPriceType } from './types';
// Data
import { SIZE, DOUGH, SAUCE, CHEESE, VEGETABLES, MEAT } from './pizzaData';
interface PizzaOrderPreviewProps {
  pizza: PizzaConfiguration;
}

export const PizzaOrderPreview: FC<PizzaOrderPreviewProps> = ({ pizza }) => {
  const { size, dough, sauce, cheese, vegetables, meat } = pizza;

  const renderText = (
    ingredients: string[],
    data: DataWithPriceType
  ): string => {
    return ingredients?.map(i => data[i].name.toLowerCase()).join(', ');
  };

  return (
    <section>
      <h2>Ленивая Маргарита</h2>
      <p>Размер: {SIZE[size].name}см</p>
      <p>Тесто: {DOUGH[dough].name.toLowerCase()}</p>
      <p>Соус: {SAUCE[sauce].name.toLowerCase()}</p>
      <p>
        {cheese?.length ? `Сыр: ${renderText(cheese, CHEESE)}` : null}
      </p>
      <p>
        {vegetables?.length
          ? `Овощи: ${renderText(vegetables, VEGETABLES)}`
          : null}
      </p>
      <p>{meat?.length ? `Мясо: ${renderText(meat, MEAT)}` : null}</p>
    </section>
  );
};
