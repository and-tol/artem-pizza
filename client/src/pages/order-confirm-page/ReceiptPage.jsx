import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
// Images
import orderError from '../../asserts/icons/order-status_error.svg'
import orderSuccess from '../../asserts/icons/order-status_ok.svg'
// Fake Data
import { fakeOrder } from '../../pizzaData'
// Components
import { Order } from '../../share/components'
// Selectors
import { getOrder } from '../checkout-page/state/checkoutSelectors'

/**
 * Страница подтверждения заказа
 * Component Order confirmation page
 */
export const OrderConfirmPage = () => {
  const history = useHistory();
  const isAccepted = useSelector(getOrder);

  const tryOrderAgain = () => {
    history.push('/checkout');
  };

  return (
    <>
      {isAccepted && (
        <section>
          <img src={orderSuccess} alt='success' />

          <p>Спасибо за заказ!</p>
          <p>Заказ успешно оплачен, ждите вашу пиццу уже через час</p>
          <Order order={fakeOrder} />
        </section>
      )}
      {!isAccepted && (
        <section>
          <img src={orderError} alt='error' />
          <p>Оплата не прошла</p>
          <p>Попробуйте еще раз или используйте другую карту</p>
          <button onClick={tryOrderAgain}>Попробовать еще раз</button>
        </section>
      )}
    </>
  );
};
