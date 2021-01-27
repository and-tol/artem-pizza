import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { calculateTotalPrice } from '../../../share/calculateTotalPrice';
// Selectors
import {
  getIngredients,
  getIngredientsByCategory,
} from '../state-ingredients/ingredientsSelectors';

// Data
import { DEFAULT_PIZZA } from '../../../pizzaData';
// Components
import { CheckboxGroup } from './CheckboxGroup';
import { RadioGroup } from './RadioGroup';
import { OrderPreview } from '../../../share/components/OrderPreview';

export const PizzaForm = ({ onPizzaOrder }) => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: DEFAULT_PIZZA,
  });

  const ingredients = useSelector(getIngredients);

  const SIZE = useSelector(getIngredientsByCategory('size'));
  const DOUGH = useSelector(getIngredientsByCategory('dough'));
  const SAUCES = useSelector(getIngredientsByCategory('sauces'));
  const CHEESE = useSelector(getIngredientsByCategory('cheese'));
  const VEGETABLES = useSelector(getIngredientsByCategory('vegetables'));
  const MEAT = useSelector(getIngredientsByCategory('meat'));

  const values = watch();

  const totalPrice = calculateTotalPrice(ingredients, values);

  const onSubmit = handleSubmit(data => {
    if (onPizzaOrder) {
      onPizzaOrder(data);
    }
  });

  return (
    <>
      <OrderPreview pizza={values} ingredients={ingredients} />
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
        <CheckboxGroup
          legend='Выберите соус'
          register={register}
          name='sauces'
          options={SAUCES}
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
