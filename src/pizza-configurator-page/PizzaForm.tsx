import React, { FC, useState } from 'react';
import { calculateTotalPrice } from '../calculateTotalPrice';
// Data
import {
  DEFAULT_PIZZA,
  DOUGH,
  SAUCE,
  SIZE,
  CHEESE,
  VEGETABLES,
  MEAT,
} from '../pizzaData';
// Types
import { PizzaConfiguration } from '../types';
import { CheckboxGroup } from './components/CheckboxGroup';
// Components
import { RadioGroup } from './components/RadioGroup';

// Hooks
import { useIngredients } from './hooks/useIngredients';

interface PizzaFormProps {
  onPizzaCreated: (pizza: PizzaConfiguration) => void;
}

export const PizzaForm: FC<PizzaFormProps> = ({ onPizzaCreated }) => {
  // Size
  const [size, setSize] = useState(DEFAULT_PIZZA.size);

  const changeSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value);
  };

  // Dough
  const [dough, setDough] = useState(DEFAULT_PIZZA.dough);
  // console.log('dough', dough);
  const changeDough = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDough(event.target.value);
  };
  // Sauce
  const [sauce, setSauce] = useState(DEFAULT_PIZZA.sauce);
  const changeSauce = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSauce(event.target.value);
  };
  // Cheese
  const [cheese, addCheese, deleteCheese] = useIngredients([]);

  const updateCheese = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      addCheese(value);
    } else {
      deleteCheese(value);
    }
  };
  // Vegetables
  const [vegetables, addVegetables, deleteVegetables] = useIngredients([]);
  const updateVegetables = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      addVegetables(value);
    } else {
      deleteVegetables(value);
    }
  };
  // Meat
  const [meat, addMeat, deleteMeat] = useIngredients([]);
  const updateMeat = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      addMeat(value);
    } else {
      deleteMeat(value);
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
        <RadioGroup
          legend='Размер'
          name='size'
          isSelected={size}
          onChange={changeSize}
          options={SIZE}
        />
        <RadioGroup
          legend='Тесто'
          name='dough'
          isSelected={dough}
          onChange={changeDough}
          options={DOUGH}
        />
        <RadioGroup
          legend='Выберите соус'
          name='sauce'
          isSelected={sauce}
          onChange={changeSauce}
          options={SAUCE}
        />

        {/* Cheeses */}
        <CheckboxGroup
          legend='Добавьте сыр'
          onChange={updateCheese}
          options={CHEESE}
          isSelected={cheese}
        />

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
