import React, { FC, useState } from 'react';

// const pizza = {
//   size: ['30', '35'],
//   dough: ['Тонкое', 'Пышное'],
//   sauce: ['Томатный', 'Белый', 'Острый'],
//   ingredients: ['Моцарелла', 'Чеддер'],
// };

function App() {
  // Size
  const [size, setSize] = useState('30');

  const changeSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value);
  };
  // Dough
  const [dough, setDough] = useState('thin');

  const changeDough = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDough(event.target.value);
  };
  // Sauce
  const [sauce, setSauce] = useState('tomato');
const changeSauce = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSauce(event.target.value)
}

  return (
    <>
      <form>
        <fieldset>
          <legend>Размер</legend>
          <label>
            <input
              type='radio'
              name='size'
              value='30'
              onChange={changeSize}
              checked={size === '30'}
            />
            30см
          </label>
          <label>
            <input
              type='radio'
              name='size'
              value='35'
              onChange={changeSize}
              checked={size === '35'}
            />
            35см
          </label>
        </fieldset>
        <fieldset>
          <legend>Тесто</legend>
          <label>
            <input
              type='radio'
              name='dough'
              value='thin'
              onChange={changeDough}
              checked={dough === 'thin'}
            />
            Тонкое
          </label>
          <label>
            <input
              type='radio'
              name='dough'
              value='puffy'
              onChange={changeDough}
              checked={dough === 'puffy'}
            />
            Пышное
          </label>
        </fieldset>
        <fieldset>
          <legend>Выберите соус</legend>
          <label>
            <input
              type='radio'
              name='sauce'
              value='tomato'
              onChange={changeSauce}
              checked={sauce === 'tomato'}
            />
            Томатный
          </label>
          <label>
            <input
              type='radio'
              name='sauce'
              value='white'
              onChange={changeSauce}
              checked={sauce === 'white'}
            />
            Белый
          </label>
          <label>
            <input
              type='radio'
              name='sauce'
              value='spicy'
              onChange={changeSauce}
              checked={sauce === 'spicy'}
            />
            Острый
          </label>
        </fieldset>
        <fieldset>
          <legend>Добавьте сыр</legend>
          <label>
            <input type='checkbox' value='tomato' />
            Моцарелла
          </label>
          <label>
            <input type='checkbox' value='white' />
            Чеддер
          </label>
          <label>
            <input type='checkbox' value='spicy' />
            Дор Блю
          </label>
        </fieldset>
        <fieldset>
          <legend>Добавьте овощи</legend>
          <label>
            <input type='checkbox' value='tomato' />
            Моцарелла
          </label>
          <label>
            <input type='checkbox' value='white' />
            Чеддер
          </label>
          <label>
            <input type='checkbox' value='spicy' />
            Дор Блю
          </label>
        </fieldset>
        <fieldset>
          <legend>Добавьте овощи</legend>
          <label>
            <input type='checkbox' value='tomato' />
            Помидор
          </label>
          <label>
            <input type='checkbox' value='mushrooms' />
            Грибы
          </label>
          <label>
            <input type='checkbox' value='pepper' />
            Перец
          </label>
          <label>
            <input type='checkbox' value='pineapple' />
            Ананасы
          </label>
          <label>
            <input type='checkbox' value='olives' />
            Оливки
          </label>
          <label>
            <input type='checkbox' value='onion' />
            Лук
          </label>
          <label>
            <input type='checkbox' value='broccoli' />
            Брокколи
          </label>
        </fieldset>
        <fieldset>
          <legend>Добавьте мясо</legend>
          <label>
            <input type='checkbox' value='bacon' />
            Бекон
          </label>
          <label>
            <input type='checkbox' value='pepperoni' />
            Пепперони
          </label>
          <label>
            <input type='checkbox' value='ham' />
            Ветчина
          </label>
        </fieldset>
      </form>
    </>
  );
}

export default App;
