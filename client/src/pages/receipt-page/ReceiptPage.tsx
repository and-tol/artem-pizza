import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Selectors
import { getAcceptedOrder } from '../checkout-page/state/selectors';
// Components
import { Order } from '../../share/components';
// Images
import orderSuccess from '../../asserts/icons/order-status_ok.svg';
import orderError from '../../asserts/icons/order-status_error.svg';

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

  const order = {
    pizza: {
      size: '30',
      dough: 'thin',
      sauce: 'tomato-sauce',
      cheese: [],
      vegetables: ['tomato'],
      meat: ['ham'],
    },
    address: 'Ivanovskaya street 7-1',
    name: 'Ivan Ivanov',
    card_number: '4545454545454545',
  };

  return (
    <>
      {isAccepted && (
        <section>
          <img src={orderSuccess} alt='success' />

          <p>Спасибо за заказ!</p>
          <p>Заказ успешно оплачен, ждите вашу пиццу уже через час</p>
          <Order order={order} />
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
