import React from 'react';
import { PizzaOrder } from '../../types';

type OrderProps = { order: PizzaOrder };

export const Order = ({ order }: OrderProps) => {
  const { size, dough, sauce, ingredients } = order;
  
  return (
    <section style={{padding: '20px', border: 'solid 1px'}}>
      <div>Размер: {size}см</div>
      <div>Tecтo: {dough}</div>
      <div>Соус: {sauce}</div>
      {ingredients.length ? (
        <div>Ингредиенты: {ingredients.join(', ')}</div>
      ) : null}
      <div>Сумма: {order.totalPrice}руб. </div>
    </section>
  );
};

// FIXME Имеет ли смысл здесь определять defaultProps
