import React from 'react';
import { useSelector } from 'react-redux';
// Helpers
import { calculateTotalPrice } from '../../share/calculateTotalPrice';

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
  const renderIngredient = (
    ingredients: string[],
    data: Ingredient[]
  ): string =>
    ingredients
      ?.map(selectedIngredient => {
        return data
          .filter(i => i.slug === selectedIngredient)[0]
          .name.toLowerCase();
      })
      .join(', ');

  return (
    <section>
      <p>Размер: {ingredients.filter(i => i.slug === size)[0].name}см</p>
      <p>
        Тесто:
        {ingredients.filter(i => i.slug === dough)[0].name.toLowerCase()}
      </p>
      <p>
        Соус: {ingredients.filter(i => i.slug === sauce)[0].name.toLowerCase()}
      </p>
      <p>{cheese.length ? `Сыр: ${renderIngredient(cheese, CHEESE)}` : null}</p>
      <p>
        {vegetables?.length
          ? `Овощи: ${renderIngredient(vegetables, VEGETABLES)}`
          : null}
      </p>
      <p>{meat?.length ? `Мясо: ${renderIngredient(meat, MEAT)}` : null}</p>

      <p>Стоимость: {calculateTotalPrice(ingredients, pizza)}руб.</p>
    </section>
  );
};
