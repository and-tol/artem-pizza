import React from 'react';
// Data
import {
  CHEESE,
  DOUGH,
  MEAT,
  SAUCE,
  SIZE,
  VEGETABLES,
} from '../../../pizzaData';
// Types
import { Order } from '../../../types';
// Helpers
import { renderIngredient } from '../../../share/renderIngredient';

type PreviousOrderProps = {
  order?: Order;
};

export const PreviousOrder = ({ order }: PreviousOrderProps) => {
  console.log('order>>>', order);

  const { card_number, ingredients } = { ...order };

  return (
    <section>
      <header>
        <div>
          Заказ <span>2390</span>
          <time>21 октября 2020, 13:40</time>
          <span>• Доставлен</span>
        </div>
      </header>
      <div>
        <h3>Ленивая Маргарита</h3>
        <p>
          <span>{SIZE[ingredients[0]!.size].name}</span> см на
          <span> {DOUGH[ingredients[0]!.dough].case.toLowerCase()} </span>
          тесте <span> • {SAUCE[ingredients[0]!.sauce].name}</span> соус
          <span>
             {ingredients[0]!.cheese?.length ? ` • ${renderIngredient(ingredients[0]!.cheese, CHEESE)}` : null}
          </span>
          <span>
            {ingredients[0]!.vegetables?.length
              ? ` • ${renderIngredient(ingredients[0]!.vegetables, VEGETABLES)}`
              : null}
          </span>
          <span>
            {' '}
            {ingredients[0]!.meat?.length ? ` • ${renderIngredient(ingredients[0]!.meat, MEAT)}` : null}
          </span>
        </p>
      </div>
      <hr />
      <footer>
        <div>
          <span>420</span> руб.
          <span> • </span>
          оплата MC <span>{`*${card_number.slice(-4)}`}</span>
          <span>icon Доставляется</span>
        </div>
      </footer>
    </section>
  );
};
