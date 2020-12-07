import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
var valid = require('card-validator');

const normalizeCardNumber = (value: string): string => {
  return (
    value
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      ?.join(' ')
      .substr(0, 19) || ''
  );
};

type FormValues = {
  address: string;
  porch: string;
  flow: string;
  flat: string;
  cardNumber: string;
  year: string;
  CVV: string;
  cardName: string;
};

const schema = yup.object().shape({
  address: yup.string().required('Это обязательное поле'),
});

export const CheckoutPage = () => {
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    watch,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const [cardType, setCardType] = useState<string | null>(null);

  const watchCardNumber = watch('cardNumber');
  let numberValidation = valid.number(watchCardNumber);

  useEffect(() => {
    if (numberValidation.card) {
      setCardType(numberValidation.card.type);
    }
  }, [watchCardNumber]);

  const onSubmit = handleSubmit(data => {
    console.log("data>>>>", data);
    // return data
  });

  return (
    <>
      <h1>Оформление заказа</h1>
      <section>
        <h3>Ленивая Маргарита</h3>
        <p>
          30 см на толстом тесте• Томатный соус • Моцарелла • Томаты • Бекон
        </p>
        <hr />
        <p>600 руб.</p>
      </section>
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
              {cardType && <span>{cardType}</span>}
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
            </label>
          </fieldset>
          <section>
            <p>
              Стоимость заказа <span>420 руб.</span>
            </p>
            <p>
              Доставка <span>180 руб.</span>
            </p>
            <hr />
            <p>
              К оплате <span>600 руб.</span>
            </p>
            <button>Оплатить 600 руб.</button>
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
