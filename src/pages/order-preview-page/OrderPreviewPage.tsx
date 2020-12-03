import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { usePizza } from '../../PizzaContext';
import { OrderPreview } from './OrderPreview';

/**
 * @param _usePizzaHook simplifies context testing
 */
export const OrderPreviewPage = ({ _usePizzaHook = usePizza }) => {
  const { pizza } = _usePizzaHook();

  if (pizza) {
    return (
      <section>
        <h2>Ленивая Маргарита</h2>
        <OrderPreview pizza={pizza} />
        <hr />
        <Link to='/checkout'>
          На страницу оформления заказа с формой оплаты
        </Link>
      </section>
    );
  } else {
    return <Redirect to='/' />;
  }
};
