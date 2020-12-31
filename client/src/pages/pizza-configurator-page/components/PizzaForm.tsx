import React from 'react';
import { useForm } from 'react-hook-form';
import { calculateTotalPrice } from '../../../share/calculateTotalPrice';
// Data
import {
  DEFAULT_PIZZA, // initialState from state-pizza
  DOUGH, // state from state-ingredients
  SAUCE,
  SIZE,
  CHEESE,
  VEGETABLES,
  MEAT,
} from '../../../pizzaData';
// Types
import { PizzaConfiguration } from '../../../types';
// Components
import { CheckboxGroup } from './CheckboxGroup';
import { RadioGroup } from './RadioGroup';

export interface PizzaFormProps {
  onPizzaCreated?: (pizza: PizzaConfiguration) => void;
}

export const PizzaForm = ({ onPizzaCreated }: PizzaFormProps) => {
  const { register, handleSubmit, watch } = useForm<PizzaConfiguration>({
    defaultValues: DEFAULT_PIZZA,
  });

  const values = watch();
  const totalPrice: number = calculateTotalPrice(values);

  const onSubmit = handleSubmit((values: PizzaConfiguration) => {
    if (onPizzaCreated) {
      onPizzaCreated(values);
    }
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <RadioGroup
          legend='Размер'
          register={register}
          name='size'
          options={SIZE}
        />
        <RadioGroup
          legend='Тесто'
          register={register}
          name='dough'
          options={DOUGH}
        />
        <RadioGroup
          legend='Выберите соус'
          register={register}
          name='sauce'
          options={SAUCE}
        />

        <CheckboxGroup
          legend='Добавьте сыр'
          register={register}
          name='cheese'
          options={CHEESE}
        />

        <CheckboxGroup
          legend='Добавьте овощи'
          register={register}
          name='vegetables'
          options={VEGETABLES}
        />

        <CheckboxGroup
          legend='Добавьте мясо'
          register={register}
          name='meat'
          options={MEAT}
        />

        <button>Заказать за {totalPrice}руб.</button>
      </form>
    </>
  );
};
