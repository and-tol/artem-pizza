import React from 'react';
import { useSelector } from 'react-redux';
// Selectors
import { getIngredientsByCategory } from '../../pages/pizza-configurator-page/state-ingredients/ingredientsSelectors';
// Types
import { Ingredient, PizzaConfiguration } from '../../types';
// Helpers
import { renderIngredients } from '../renderIngredient';



export const OrderPreview = ({
  pizza,
  ingredients,
}) => {
  const { size, dough, sauce, cheese, vegetables, meat } = pizza;

  const CHEESE = useSelector(getIngredientsByCategory('cheese'));
  const VEGETABLES = useSelector(
    getIngredientsByCategory('vegetables')
  );
  const MEAT = useSelector(getIngredientsByCategory('meat'));

  return (
    <section>
      <p>
        <span>{!!size && ` ${renderIngredients(size, ingredients)}`}</span>
        см на тесте
        <span>{!!dough && ` ${renderIngredients(dough, ingredients)}`}</span>
        <span>{` • ${
          !!sauce && ` ${renderIngredients(sauce, ingredients)} `
        }`}</span>
        соус
        <span>
          {cheese !== undefined && cheese.length && CHEESE.length
            ? ` • Сыр: ${renderIngredients(cheese, CHEESE)}`
            : null}
        </span>
        <span>
          {vegetables !== undefined && vegetables?.length && VEGETABLES.length
            ? ` • Овощи: ${renderIngredients(vegetables, VEGETABLES)}`
            : null}
        </span>
        <span>
          {meat !== undefined && meat?.length && MEAT.length
            ? ` • Мясо: ${renderIngredients(meat, MEAT)}`
            : null}
        </span>
      </p>
    </section>
  );
};
