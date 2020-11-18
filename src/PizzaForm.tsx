import React, { FC, useState } from 'react';
// Types
import { PizzaConfiguration } from './types';

import { calculateTotalPrice } from './calculateTotalPrice';


interface PizzaFormProps {
	onPizzaCreated: (pizza: PizzaConfiguration) => void
}

export const PizzaForm: FC<PizzaFormProps> = ({ onPizzaCreated }) => {
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
      setVegetables(vegetables => [...vegetables, value]);
    } else {
      setVegetables(vegetables => vegetables.filter(v => v !== value));
    }
  };
  // Meat
  const [meat, setMeat] = useState<string[]>([]);
  const updateMeat = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setMeat(meat => [...meat, value]);
    } else {
      setMeat(meat => meat.filter(m => m !== value));
    }
  };

  const totalPrice: number = calculateTotalPrice({
    size,
    cheese,
    vegetables,
    meat,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onPizzaCreated({ size, dough, sauce, cheese, vegetables, meat });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        {/* Sauses */}
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
        {/* Cheeses */}
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
        {/* Meat */}
        <fieldset>
          <legend>Добавьте мясо</legend>
          <label>
            <input
              type='checkbox'
              value='bacon'
              onChange={updateMeat}
              checked={meat.includes('bacon')}
            />
            Бекон
          </label>
          <label>
            <input
              type='checkbox'
              value='pepperoni'
              onChange={updateMeat}
              checked={meat.includes('pepperoni')}
            />
            Пепперони
          </label>
          <label>
            <input
              type='checkbox'
              value='ham'
              onChange={updateMeat}
              checked={meat.includes('ham')}
            />
            Ветчина
          </label>
        </fieldset>
        <button>Заказать за {totalPrice}руб.</button>
      </form>
    </>
  );
};
