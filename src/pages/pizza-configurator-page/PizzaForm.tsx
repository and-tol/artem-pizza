import React from 'react';
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
// Components
import { CheckboxGroup } from './components/CheckboxGroup';
import { RadioGroup } from './components/RadioGroup';


export interface PizzaFormProps {
  onPizzaCreated?: (pizza: PizzaConfiguration) => void;
}

export const PizzaForm = ({ onPizzaCreated }: PizzaFormProps) => {
  const { register, handleSubmit, watch } = useForm<PizzaConfiguration>({
    defaultValues: DEFAULT_PIZZA,
  });

  const values = watch();
  const totalPrice: number = calculateTotalPrice(values);

  const onSubmit = handleSubmit((data: PizzaConfiguration) => {
    if (onPizzaCreated) {
      onPizzaCreated(values);
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
          name='cheese'
        />

        <CheckboxGroup
          legend='Добавьте овощи'
          options={VEGETABLES}
          register={register}
          name='vegetables'
        />

        <CheckboxGroup
          legend='Добавьте мясо'
          options={MEAT}
          register={register}
          name='meat'
        />

        <button>Заказать за {totalPrice}руб.</button>
      </form>
    </>
  );
};
