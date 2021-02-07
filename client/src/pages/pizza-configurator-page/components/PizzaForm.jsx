import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
// Data
import { DEFAULT_PIZZA } from '../../../pizzaData'
// Helpers
import { calculateTotalPrice } from '../../../share/calculateTotalPrice'
// Components
import { Loader } from '../../../share/components/loader'
// Hooks
import { useWindowDimensions } from '../../../share/hooks/useWindowDimentions'
// Styles
import { ButtonPrimary, Footer } from '../../../share/styled-components'
// Selectors
import {
  getIngredients,
  getIngredientsByCategory,
  getLoadingStatus
} from '../state-ingredients/ingredientsSelectors'
import { CheckboxGroup } from './CheckboxGroup'
import { PizzaPreview } from './PizzaPreview'
import { RadioGroupSlider } from './RadioGroupSlider'
import { RadioGroupSwitcher } from './RadioGroupSwitcher'
const Container = styled.section`
  @media (min-width: 960px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const FormStyled = styled.form`
  @media (min-width: 960px) {
    max-width: 500px;
  }
`;

const RadioGroupContainer = styled.div`
  position: relative;
  margin-bottom: 24px;
  @media (min-width: 960px) {
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
  const isLoading = useSelector(getLoadingStatus);

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

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <Container>
      <PizzaPreview
        pizza={values}
        ingredients={ingredients}
        onSubmit={onSubmit}
        totalPrice={totalPrice}
      />
      <FormStyled onSubmit={onSubmit}>
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
        {windowWidth < 960 && (
          <Footer>
            <Button>Заказать за {totalPrice}руб.</Button>
          </Footer>
        )}
      </FormStyled>
    </Container>
  );
};
