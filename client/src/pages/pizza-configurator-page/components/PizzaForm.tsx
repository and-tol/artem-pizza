import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { calculateTotalPrice } from '../../../share/calculateTotalPrice';
// Selectors
import {
  getIngredients,
  getIngredientsByCategory,
} from '../state-ingredients/selectors';
import { getPizza } from '../state-pizza/selectors';
// Types
import { PizzaConfiguration } from '../../../types';
// Components
import { CheckboxGroup } from './CheckboxGroup';
import { RadioGroup } from './RadioGroup';

export interface PizzaFormProps {
  onPizzaCreated?: (pizza: PizzaConfiguration) => void;
}

export const PizzaForm = ({ onPizzaCreated }: PizzaFormProps) => {
  const pizza = useSelector(getPizza);

  const { register, handleSubmit, watch } = useForm<PizzaConfiguration>({
    defaultValues: pizza,
  });

  const ingredients = useSelector(getIngredients);

  const SIZE = useSelector(getIngredientsByCategory('size'));
  const DOUGH = useSelector(getIngredientsByCategory('dough'));
  const SAUCE = useSelector(getIngredientsByCategory('sauce'));
  const CHEESE = useSelector(getIngredientsByCategory('cheese'));
  const VEGETABLES = useSelector(getIngredientsByCategory('vegetables'));
  const MEAT = useSelector(getIngredientsByCategory('meat'));

  const values = watch();

  const totalPrice: number = calculateTotalPrice(ingredients, values);

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
