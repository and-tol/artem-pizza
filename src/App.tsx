import React, { useState } from 'react';

// const pizza = {
//   size: ['30', '35'],
//   dough: ['Тонкое', 'Пышное'],
//   sauce: ['Томатный', 'Белый', 'Острый'],
//   ingredients: ['Моцарелла', 'Чеддер'],
// };

function App() {
  const [size, setSize] = useState('30')

  const changeSize = (event: any) => {
    setSize(event.target.value);
  }


  return (
    <>
      <form>
        <fieldset>
          <legend>Размер</legend>
          <label>
            <input type='radio' name='size' value='30' onChange={changeSize} checked={size==='30'} />
            30см
          </label>
          <label>
            <input type='radio' name='size' value='35' onChange={changeSize} checked={size==='35'}/>
            35см
          </label>
        </fieldset>
        <fieldset>
          <legend>Тесто</legend>
          <label>
            <input type='radio' name='dough' value='thin' />
            Тонкое
          </label>
          <label>
            <input type='radio' name='dough' value='puffy' />
            Пышное
          </label>
        </fieldset>
        <fieldset>
          <legend>Выберите соус</legend>
          <label>
            <input type='radio' name='sauce' value='tomato' />
            Томатный
          </label>
          <label>
            <input type='radio' name='sauce' value='white' />
            Белый
          </label>
          <label>
            <input type='radio' name='sauce' value='spicy' />
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
