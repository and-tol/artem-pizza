import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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
  const { register, handleSubmit, watch } = useForm<PizzaConfiguration>({
    defaultValues: DEFAULT_PIZZA,
  });

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

  const values = watch();
  console.log('values>>>>', values);

  // const totalPrice: number = calculateTotalPrice({
  //   size,
  //   cheese,
  //   vegetables,
  //   meat,
  // });
  const totalPrice: number = calculateTotalPrice(values);

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   if (onPizzaCreated) {
  //     onPizzaCreated({ size, dough, sauce, cheese, vegetables, meat });
  //   }
  // };

  const onSubmit = handleSubmit((data: PizzaConfiguration) => {
    console.log('data>>>>', data);
    if (onPizzaCreated) {
      onPizzaCreated({ size, dough, sauce, cheese, vegetables, meat });
    }
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <RadioGroup
          register={register}
          legend='Размер'
          name='size'
          options={SIZE}
        />
        <RadioGroup
          register={register}
          legend='Тесто'
          name='dough'
          options={DOUGH}
        />
        <RadioGroup
          register={register}
          legend='Выберите соус'
          name='sauce'
          options={SAUCE}
        />

        <CheckboxGroup
          legend='Добавьте сыр'
          options={CHEESE}
          register={register}
          name="cheese"
        />

        <CheckboxGroup
          legend='Добавьте овощи'
          options={VEGETABLES}
          register={register}
          name="vegetables"
        />

        <CheckboxGroup
          legend='Добавьте мясо'
          options={MEAT}
          register={register}
          name="meat"
        />

        <button>Заказать за {totalPrice}руб.</button>
      </form>
    </>
  );
};
