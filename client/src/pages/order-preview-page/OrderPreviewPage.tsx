import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
// Selectors
import { getPizza } from '../pizza-configurator-page/state-pizza/selectors';
// Components
import { OrderPreview } from './OrderPreview';

export const OrderPreviewPage = () => {
  const pizza = useSelector(getPizza);

  const { size, dough, sauce } = pizza;

  /**
   * Style for link to go to another page
   */
  const linkStyle =
    !size || !dough || !sauce
      ? ({
          cursor: 'not-allowed',
          opacity: '0.5',
          'pointer-events': 'none',
        } as React.CSSProperties)
      : undefined;

  if (pizza) {
    return (
      <section>
        <h2>Ленивая Маргарита</h2>
        <OrderPreview pizza={pizza} />
        <hr />
        <Link to='/checkout' style={linkStyle}>
          На страницу оформления заказа с формой оплаты
        </Link>
      </section>
    );
  } else {
    return <Redirect to='/' />;
  }
};
