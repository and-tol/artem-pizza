import React from 'react';
// Helpers
import { calculateTotalPrice } from '../../share/calculateTotalPrice';
import { renderIngredients } from '../../share/renderIngredient';
// Types
import { PizzaConfiguration, Ingredient } from '../../types';

export interface OrderPreviewProps {
  pizza: PizzaConfiguration;
  ingredients: Ingredient[] | [];
}

export const OrderPreview: React.FC<OrderPreviewProps> = ({
  pizza,
  ingredients,
}) => {
  const { size, dough, sauce, cheese, vegetables, meat } = pizza;

  const CHEESE = ingredients.filter(i => i.category === 'cheese');
  const VEGETABLES = ingredients.filter(i => i.category === 'vegetables');
  const MEAT = ingredients.filter(i => i.category === 'meat');

  return (
    <section>
      <p>
        Размер:
        {!!size && ` ${ingredients.filter(i => i.slug === size)[0].name}`}
        см
      </p>
      <p>
        Тесто:
        {!!dough &&
          ` ${ingredients.filter(i => i.slug === dough)[0].name.toLowerCase()}`}
      </p>
      <p>
        Соус:
        {!!sauce &&
          ` ${ingredients.filter(i => i.slug === sauce)[0].name.toLowerCase()}`}
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
