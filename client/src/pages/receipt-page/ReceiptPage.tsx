import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Images
import orderError from '../../asserts/icons/order-status_error.svg';
import orderSuccess from '../../asserts/icons/order-status_ok.svg';
// Components
import { Order } from '../../share/components';
// Selectors
import { getAcceptedOrder } from '../checkout-page/state/checkoutSelectors';
// Fake Data
import { fakeOrder } from '../../pizzaData';

/**
 * Страница подтверждения заказа
 * Order confirmation page
 */
export const ReceiptPage = () => {
  const history = useHistory();
  const isAccepted = useSelector(getAcceptedOrder);

  const tryOrderAgain = () => {
    history.push('/checkout');
  };
  /**
   * Пользователь перенаправляется на главную страницу
   */
  // useEffect(() => {
  //   let id: NodeJS.Timeout;
  //   if (isAccepted) {
  //     id = setTimeout(() => {
  //       history.push('/');
  //     }, 3500);
  //   }
  //   return () => {
  //     clearTimeout(id);
  //   };
  // });

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
