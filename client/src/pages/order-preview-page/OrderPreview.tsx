import React from 'react';
import { useSelector } from 'react-redux';
// Helpers
import { calculateTotalPrice } from '../../share/calculateTotalPrice';
import { renderIngredients } from '../../share/renderIngredient';

import { PizzaConfiguration, Ingredient } from '../../types';
// Selectors
import { getIngredients } from '../pizza-configurator-page/state-ingredients/selectors';

export interface OrderPreviewProps {
  pizza: PizzaConfiguration;
}

export const OrderPreview: React.FC<OrderPreviewProps> = ({ pizza }) => {
  const { size, dough, sauce, cheese, vegetables, meat } = pizza;

  const ingredients = useSelector(getIngredients);

  const CHEESE = ingredients.filter(i => i.category === 'cheese');
  const VEGETABLES = ingredients.filter(i => i.category === 'vegetables');
  const MEAT = ingredients.filter(i => i.category === 'meat');

  /**
   * Function render selected ingredients
   * @param ingredients - selected ingredient
   * @param data - possible ingredients
   */
  // const renderIngredients = (
  //   ingredients: string[],
  //   data: Ingredient[]
  // ): string =>
  //   ingredients
  //     ?.map(selectedIngredient => {
  //       return data
  //         .filter(i => i.slug === selectedIngredient)[0]
  //         .name.toLowerCase();
  //     })
  //     .join(', ');

  return (
    <section>
      <p>
        Размер:
        {size
          ? ` ${ingredients.filter(i => i.slug === size)[0].name}`
          : ' Ошибка базы данных'}
        см
      </p>
      <p>
        Тесто:
        {dough
          ? ` ${ingredients
              .filter(i => i.slug === dough)[0]
              .name.toLowerCase()}`
          : ' Ошибка базы данных'}
      </p>
      <p>
        Соус:
        {sauce
          ? ` ${ingredients
              .filter(i => i.slug === sauce)[0]
              .name.toLowerCase()}`
          : ' Ошибка базы данных'}
      </p>
      <p>
        {cheese.length ? `Сыр: ${renderIngredients(cheese, CHEESE)}` : null}
      </p>
      <p>
        {vegetables?.length
          ? `Овощи: ${renderIngredients(vegetables, VEGETABLES)}`
          : null}
      </p>
      <p>{meat?.length ? `Мясо: ${renderIngredients(meat, MEAT)}` : null}</p>

      <p>Стоимость: {calculateTotalPrice(ingredients, pizza)}руб.</p>
    </section>
  );
};
