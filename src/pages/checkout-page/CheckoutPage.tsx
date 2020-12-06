import React from 'react';

export const CheckoutPage = () => {
  return (
    <>
      <h1>Оформление заказа</h1>
      <section>
        <h3>Ленивая Маргарита</h3>
        <p>
          30 см на толстом тесте• Томатный соус • Моцарелла • Томаты • Бекон
        </p>
        <hr />
        <p>420 руб.</p>
      </section>
      <section>
        <form>
          <fieldset>
            <legend>Адрес доставки</legend>
            <label htmlFor='address'>
              <input id='address' type='text' placeholder='Введите адрес' />
            </label>
            <div>
              <label htmlFor='porch'>
                подъезд
                <input id='porch' type='tel' />
              </label>
              <label htmlFor='flow'>
                этаж
                <input id='flow' type='tel' />
              </label>
              <label htmlFor='flat'>
                квартира
                <input id='flat' type='tel' />
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Данные для оплаты</legend>
            <label htmlFor='card-number'>
              <input id='card-number' type='tel' placeholder='Номер карты' />
            </label>
            <div>
              <label htmlFor='year'>
                <input id='year' type='tel' placeholder='MM/YYYY' />
              </label>
              <label htmlFor='CVV'>
                <input id='CVV' type='tel' placeholder='CVV' />
              </label>
            </div>
            <label htmlFor='card-name'>
              <input
                id='card-name'
                type='text'
                placeholder='Имя как на карте'
              />
            </label>
          </fieldset>
        </form>
        <p>
          Доставим пиццу в течение часа или вернем деньги. Артем слов на ветер
          не бросает.
        </p>
      </section>
    </>
  );
};
