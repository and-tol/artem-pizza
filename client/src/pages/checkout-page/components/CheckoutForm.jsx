import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
// Actions
import * as checkoutActions from '../state/checkoutActions';
// Helpers
import { calculateTotalPrice } from '../../../share/calculateTotalPrice';
// Data
import { PIZZA_DELIVERY } from '../../../pizzaData';

const valid = require('card-validator');

const normalizeCardNumber = value => {
  return (
    value
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      ?.join(' ')
      .substr(0, 19) || ''
  );
};

const schema = yup.object().shape({
  address: yup.string().required('Это обязательное поле'),
  cardNumber: yup.string().required('Это обязательное поле'),
  cardName: yup.string().required('Это обязательное поле'),
});

/**
 * Компонент собирает данные пользователя для оплаты заказа и отправляет на сервер
 * The component collects user data for order payment and sends it to the server
 * @param pizza 
 * @param ingredients
 */
export const CheckoutForm = ({ pizza, ingredients }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors, setValue, watch } = useForm({
    resolver: yupResolver(schema),
  });

  const сardNumber = watch('cardNumber');
  let numberValidation = valid.number(сardNumber);

  const onSubmit = handleSubmit(data => {
    let order = null;
    order = {
      pizza: pizza,
      address: data.address,
      cardName: data.cardName,
      cardNumber: data.cardNumber,
    };
    if (order) {
      dispatch(checkoutActions.fillOrder(order));
      dispatch(checkoutActions.sendOrderAsync(order));
    }
  });

  const orderPrice = calculateTotalPrice(ingredients, pizza);

  return (
    <>
      <section>
        <form onSubmit={onSubmit}>
          <fieldset>
            <legend>Адрес доставки</legend>
            <label htmlFor='address'>
              <input
                ref={register}
                name='address'
                id='address'
                type='text'
                placeholder='Введите адрес'
              />
              <div>{errors.address?.message}</div>
            </label>
            <div>
              <label htmlFor='porch'>
                подъезд
                <input ref={register} name='porch' id='porch' type='tel' />
              </label>
              <label htmlFor='flow'>
                этаж
                <input ref={register} name='flow' id='flow' type='tel' />
              </label>
              <label htmlFor='flat'>
                квартира
                <input ref={register} name='flat' id='flat' type='tel' />
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Данные для оплаты</legend>
            <label htmlFor='cardNumber'>
              <input
                ref={register}
                name='cardNumber'
                id='cardNumber'
                type='tel'
                inputMode='numeric'
                autoComplete='cc-number'
                placeholder='Номер карты'
                onChange={e => {
                  const { value } = e.target;
                  setValue('cardNumber', normalizeCardNumber(value));
                }}
              />
              <div>{errors.cardNumber?.message}</div>
              <span>{numberValidation.card && numberValidation.card.type}</span>
            </label>
            <div>
              <label htmlFor='year'>
                <input
                  ref={register}
                  name='year'
                  id='year'
                  type='tel'
                  placeholder='MM/YYYY'
                />
              </label>
              <label htmlFor='CVV'>
                <input
                  ref={register}
                  name='CVV'
                  id='CVV'
                  type='tel'
                  placeholder='CVV'
                />
              </label>
            </div>
            <label htmlFor='cardName'>
              <input
                ref={register}
                name='cardName'
                id='cardName'
                type='text'
                placeholder='Имя как на карте'
              />
              <div>{errors.cardName?.message}</div>
            </label>
          </fieldset>
          <section>
            <p>
              Стоимость заказа <span>{orderPrice} руб.</span>
            </p>
            <p>
              Доставка <span>{PIZZA_DELIVERY} руб.</span>
            </p>
            <hr />
            <p>
              К оплате <span>{orderPrice + PIZZA_DELIVERY} руб.</span>
            </p>
            <button type='submit'>
              Оплатить {orderPrice + PIZZA_DELIVERY} руб.
            </button>
          </section>
        </form>
        <p>
          Доставим пиццу в течение часа или вернем деньги. Артем слов на ветер
          не бросает.
        </p>
      </section>
    </>
  );
};
