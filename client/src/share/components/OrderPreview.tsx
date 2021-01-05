import React from 'react';
import { useSelector } from 'react-redux';
// Selectors
import { getIngredientsByCategory } from '../../pages/pizza-configurator-page/state-ingredients/selectors';
// Helpers
import { renderIngredients } from '../renderIngredient';
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

  const CHEESE = useSelector(getIngredientsByCategory('cheese'));
  const VEGETABLES = useSelector(getIngredientsByCategory('vegetables'));
  const MEAT = useSelector(getIngredientsByCategory('meat'));

  // console.log('order preview pizza>>>', pizza);
  // console.log('order preview cheese>>>', cheese);

  return (
    <section>
      <p>
        <span>
          {!!size && ` ${ingredients.filter(i => i.slug === size)[0].name}`}
        </span>{' '}
        см на тесте
        <span>
          {!!dough &&
            ` ${ingredients
              .filter(i => i.slug === dough)[0]
              .name.toLowerCase()}`}
        </span>
        <span>{` • ${
          !!sauce &&
          ` ${ingredients.filter(i => i.slug === sauce)[0].name.toLowerCase()} `
        }`}</span>{' '}
        соус
        <span>
          {cheese.length && CHEESE.length
            ? ` • Сыр: ${renderIngredients(cheese, CHEESE)}`
            : null}
        </span>
        <span>
          {vegetables?.length && VEGETABLES.length
            ? ` • Овощи: ${renderIngredients(vegetables, VEGETABLES)}`
            : null}
        </span>
        <span>
          {meat?.length && MEAT.length
            ? ` • Мясо: ${renderIngredients(meat, MEAT)}`
            : null}
        </span>
      </p>
    </section>
  );
};
