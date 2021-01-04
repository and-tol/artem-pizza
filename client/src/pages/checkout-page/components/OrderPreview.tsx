import React from 'react';
// Helpers
import { calculateTotalPrice } from '../../../share/calculateTotalPrice';
// Helpers
import { renderIngredients } from '../../../share/renderIngredient';
// Types
import { Ingredient, PizzaConfiguration } from '../../../types';

interface CheckoutPreviewProps {
  pizza: PizzaConfiguration;
  ingredients: Ingredient[];
}

export const OrderPreview: React.FC<CheckoutPreviewProps> = ({
  pizza,
  ingredients,
}) => {
  const { size, dough, sauce, cheese, vegetables, meat } = pizza;



  const CHEESE = ingredients.filter(i => i.category === 'cheese');
  const VEGETABLES = ingredients.filter(i => i.category === 'vegetables');
  const MEAT = ingredients.filter(i => i.category === 'meat');

  return (
    <>
      <section>
        <h3>Ленивая Маргарита</h3>
        <p>
          <span>
            {!!size && ` ${ingredients.filter(i => i.slug === size)[0].name}`}
          </span>{' '}
          см на
          <span>
            тесте{' '}
            {!!dough &&
              ` ${ingredients
                .filter(i => i.slug === dough)[0]
                .name.toLowerCase()}`}
          </span>
          <span>{` • ${
            !!sauce &&
            ` ${ingredients
              .filter(i => i.slug === sauce)[0]
              .name.toLowerCase()} `
          }`}</span>{' '}
          соус
          <span>
            {cheese.length
              ? ` • Сыр: ${renderIngredients(cheese, CHEESE)}`
              : null}
          </span>
          <span>
            {vegetables?.length
              ? ` • Овощи: ${renderIngredients(vegetables, VEGETABLES)}`
              : null}
          </span>
          <span>
            {meat?.length ? ` • Мясо: ${renderIngredients(meat, MEAT)}` : null}
          </span>
        </p>
      </section>
    </>
  );
};
