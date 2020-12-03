import React, { useState } from 'react';
import { calculateTotalPrice } from '../../calculateTotalPrice';
// Data
import {
  DEFAULT_PIZZA,
  DOUGH,
  SAUCE,
  SIZE,
  CHEESE,
  VEGETABLES,
  MEAT,
} from '../../pizzaData';
// Types
import { PizzaConfiguration } from '../../types';
import { CheckboxGroup } from './components/CheckboxGroup';
// Components
import { RadioGroup } from './components/RadioGroup';

// Hooks
import { useIngredients } from './hooks/useIngredients';

export interface PizzaFormProps {
  onPizzaCreated?: (pizza: PizzaConfiguration) => void;
}

export const PizzaForm = ({ onPizzaCreated }: PizzaFormProps) => {
  // Size
  const [size, setSize] = useState(DEFAULT_PIZZA.size);

  const changeSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value);
  };

  // Dough
  const [dough, setDough] = useState(DEFAULT_PIZZA.dough);
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
    if (onPizzaCreated) {
      onPizzaCreated({ size, dough, sauce, cheese, vegetables, meat });
    }
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

        {/* Vegetables */}
        <CheckboxGroup
          legend='Добавьте овощи'
          onChange={updateVegetables}
          options={VEGETABLES}
          isSelected={vegetables}
        />

        {/* Meat */}
        <CheckboxGroup
          legend='Добавьте мясо'
          onChange={updateMeat}
          options={MEAT}
          isSelected={meat}
        />

        <button>Заказать за {totalPrice}руб.</button>
      </form>
    </>
  );
};
