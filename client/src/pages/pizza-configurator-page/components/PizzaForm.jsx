import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { calculateTotalPrice } from '../../../share/calculateTotalPrice';
import styled from 'styled-components';
// Hooks
import { useWindowDimensions } from '../../../share/hooks/useWindowsDimentions';
// Selectors
import {
  getIngredients,
  getIngredientsByCategory,
} from '../state-ingredients/ingredientsSelectors';

// Data
import { DEFAULT_PIZZA } from '../../../pizzaData';
// Components
import { CheckboxGroup } from './CheckboxGroup';
import { RadioGroupSlider } from './RadioGroupSlider';
import { OrderPreview } from '../../../share/components/OrderPreview';
import { RadioGroupSwitcher } from './RadioGroupSwitcher';
import { ButtonPrimary } from '../../../share/styled-components/Button';
import { Footer } from '../../../share/styled-components/Footer';

// Styles
const RadioGroupContainer = styled.div`
  position: relative;
  margin-bottom: 24px;
  @media (min-width: 960.5px) {
    margin-bottom: 32px;
  }
`;
const RadioGroupSwitcherContainer = styled(RadioGroupContainer)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 480px) {
    justify-content: flex-start;
  }
`;

const Button = styled(ButtonPrimary)`
  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const PizzaForm = ({ onPizzaOrder }) => {
  const { width: windowWidth } = useWindowDimensions();
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
        <RadioGroupSwitcherContainer>
          <RadioGroupSwitcher
            legend='Размер'
            register={register}
            name='size'
            options={SIZE}
          />

          <RadioGroupSwitcher
            legend='Тесто'
            register={register}
            name='dough'
            options={DOUGH}
          />
        </RadioGroupSwitcherContainer>
        <RadioGroupSlider
          legend='Выберите соус'
          register={register}
          name='sauces'
          options={SAUCES}
        />

        <RadioGroupContainer>
          <CheckboxGroup
            legend='Добавьте сыр'
            register={register}
            name='cheese'
            options={CHEESE}
          />
        </RadioGroupContainer>

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
        {windowWidth <= 480 ? (
          <Footer>
            <Button>Заказать за {totalPrice}руб.</Button>
          </Footer>
        ) : (
          <Button>Заказать за {totalPrice}руб.</Button>
        )}
      </form>
    </>
  );
};
