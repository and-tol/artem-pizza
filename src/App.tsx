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
    setSauce(event.target.value);
  };
  // Cheese
  const [cheese, setCheese] = useState<string[]>([]);
  const updateCheese = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheese(cheese => [...cheese, value]);
    } else {
      setCheese(cheese => cheese.filter(c => c !== value));
    }
  };
  // Vegetables
  const [vegetables, setVegetables] = useState<string[]>([]);
  const updateVegetables = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setVegetables(vegetables => [...cheese, value]);
    } else {
      setVegetables(vegetables => cheese.filter(c => c !== value));
    }
  };

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
        {/* Соус */}
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
        {/* Сыр */}
        <fieldset>
          <legend>Добавьте сыр</legend>
          <label>
            <input
              type='checkbox'
              value='mozarella'
              onChange={updateCheese}
              checked={cheese.includes('mozarella')}
            />
            Моцарелла
          </label>
          <label>
            <input
              type='checkbox'
              value='cheddar'
              onChange={updateCheese}
              checked={cheese.includes('cheddar')}
            />
            Чеддер
          </label>
          <label>
            <input
              type='checkbox'
              value='dorblue'
              onChange={updateCheese}
              checked={cheese.includes('dorblue')}
            />
            Дор Блю
          </label>
        </fieldset>
        {/* Овощи */}
        <fieldset>
          <legend>Добавьте овощи</legend>
          <label>
            <input
              type='checkbox'
              value='tomato'
              onChange={updateVegetables}
              checked={vegetables.includes('tomato')}
            />
            Помидор
          </label>
          <label>
            <input
              type='checkbox'
              value='mushrooms'
              onChange={updateVegetables}
              checked={vegetables.includes('mushrooms')}
            />
            Грибы
          </label>
          <label>
            <input
              type='checkbox'
              value='pepper'
              onChange={updateVegetables}
              checked={vegetables.includes('pepper')}
            />
            Перец
          </label>
          <label>
            <input
              type='checkbox'
              value='pineapple'
              onChange={updateVegetables}
              checked={vegetables.includes('pineapple')}
            />
            Ананасы
          </label>
          <label>
            <input
              type='checkbox'
              value='olives'
              onChange={updateVegetables}
              checked={vegetables.includes('olives')}
            />
            Оливки
          </label>
          <label>
            <input
              type='checkbox'
              value='onion'
              onChange={updateVegetables}
              checked={vegetables.includes('onion')}
            />
            Лук
          </label>
          <label>
            <input
              type='checkbox'
              value='broccoli'
              onChange={updateVegetables}
              checked={vegetables.includes('broccoli')}
            />
            Брокколи
          </label>
        </fieldset>
        {/* Мясо */}
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
