import React from 'react';
// Helpers
import { calculateTotalPrice } from '../../calculateTotalPrice';
// Data
import { CHEESE, DOUGH, MEAT, SAUCE, SIZE, VEGETABLES } from '../../pizzaData';
// Types
import { IngredientNameAndPriceState, PizzaConfiguration } from '../../types';
export interface OrderPreviewProps {
  pizza: PizzaConfiguration;
}

export const OrderPreview: React.FC<OrderPreviewProps> = ({ pizza }) => {
  const { size, dough, sauce, cheese, vegetables, meat } = pizza;

  const renderText = (
    ingredients: string[],
    data: IngredientNameAndPriceState
  ): string => {
    return ingredients?.map(i => data[i].name.toLowerCase()).join(', ');
  };

  return (
    <section>
      <p>Размер: {SIZE[size].name}см</p>
      <p>Тесто: {DOUGH[dough].name.toLowerCase()}</p>
      <p>Соус: {SAUCE[sauce].name.toLowerCase()}</p>
      <p>{cheese.length ? `Сыр: ${renderText(cheese, CHEESE)}` : null}</p>
      <p>
        {vegetables?.length
          ? `Овощи: ${renderText(vegetables, VEGETABLES)}`
          : null}
      </p>
      <p>{meat?.length ? `Мясо: ${renderText(meat, MEAT)}` : null}</p>
      <p>Стоимость: {calculateTotalPrice(pizza)}руб.</p>
    </section>
  );
};
