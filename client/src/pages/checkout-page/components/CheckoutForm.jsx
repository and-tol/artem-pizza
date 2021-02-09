import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import styled from 'styled-components';
// Hooks
import { useWindowDimensions, useValidCard } from '../../../share/hooks';
// Data
import { PIZZA_DELIVERY } from '../../../pizzaData';
// Helpers
import { calculateTotalPrice } from '../../../share/calculateTotalPrice';
// Actions
import { checkoutReducer, sendOrderAsync } from '../state/checkoutReducer';
import { getOrder } from '../state/checkoutSelectors';
// Components
import { Order, ImageIcon } from '../../../share/components';
// Styles
import { ButtonPrimary } from '../../../share/styled-components/Button';
import {
  InputFieldwPlaceholder,
  InputField,
} from '../../../share/styled-components/InputField';
const Section = styled.section`
  padding-bottom: 160px;
  @media (min-width: 960px) {
    padding-bottom: 0px;
  }
`;

const OrderPreview = styled(Order)`
  grid-area: order;
  @media (min-width: 960px) {
    max-width: 350px;
  }
`;
const FormContent = styled.div`
  grid-area: form;
  @media (min-width: 960px) {
    max-width: 530px;
  }
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'order'
    'form'
    'payment';
  @media (min-width: 960px) {
    grid-template-columns: 1fr 350px;
    grid-template-rows: 0.6fr 1.4fr;
    gap: 0px 80px;
    grid-template-areas:
      'form order'
      'form payment';
  }
`;

const Legend = styled.legend`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: var(--black);
  margin-bottom: 16px;
  @media (min-width: 960px) {
    font-size: 20px;
    margin-bottom: 24px;
  }
`;

const FormSection = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid var(--gray200);
  & + & {
    margin-top: 16px;
    @media (min-width: 960px) {
      margin-top: 24px;
    }
  }
  @media (min-width: 960px) {
    padding-bottom: 24px;
  }
`;
const AddressDetails = styled.div`
  display: flex;
  margin-bottom: -12px;
  @media (min-width: 960px) {
    margin-bottom: -16px;
  }
  label {
    color: var(--gray600);
    input {
      margin-top: 4px;
    }
  }
`;
const PaymentCardDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;
const OrderPayment = styled.footer`
  grid-area: payment;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -16px 32px rgba(75, 75, 124, 0.05),
    0px 0px 4px rgba(75, 75, 124, 0.1);
  @media (min-width: 960px) {
    position: relative;
    max-width: 350px;
    box-shadow: none;
    background-color: transparent;
  }
`;
const OrderPaymentSection = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  font-weight: ${({ toPay }) => toPay && '500'};
  margin-top: ${({ toPay }) => toPay && '18px'};
  @media (min-width: 480px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 8px;
  }
`;
const DividingLine = styled.div`
  width: 100%;
  border-bottom: 1px dashed var(--gray200);
  padding-bottom: 4px;
  @media (min-width: 480px) {
    padding-bottom: 8px;
  }
`;
const CheckoutFormButton = styled(ButtonPrimary)`
  margin-top: 16px;
  @media (min-width: 960px) {
    width: 100%;
    margin-top: 32px;
  }
`;
const ArtemPromises = styled.p`
  margin-top: 24px;
`;
const ErrorsMessage = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: var(--status-error);
  position: relative;
  bottom: 20px;
`;
const InputWrapper = styled.div`
  position: relative;
  img {
    position: absolute;
    right: 20px;
    transform: translate3d(0, -50%, 0);
    top: 50%;
  }
`;

const normalizeCardNumber = value => {
  return (
    value
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      ?.join(' ')
      .substr(0, 19) || ''
  );
};
const normalizeCardCVV = value => {
  return (
    value
      .replace(/\s/g, '')
      .match(/.{1,3}/g)
      ?.join('')
      .substr(0, 3) || ''
  );
};

const schema = yup.object().shape({
  address: yup
    .string()
    .required('Это обязательное поле')
    .min(5, 'Слишком короткий адрес'),
  cardNumber: yup
    .number()
    .min(12, 'Недостаточно цифр')
    .positive('Номер должен быть положительным числом')
    .required('Это обязательное поле')
    .typeError('Номер должен быть числом')
    .integer('Номер не может содержать десятичную точку '),
  cardName: yup
    .string()
    .required('Это обязательное поле')
    .min('3', 'Слишком короткое имя'),
});

/**
 * Компонент собирает данные пользователя для оплаты заказа и отправляет на сервер
 * The component collects user data for order payment and sends it to the server
 * @param pizza
 * @param ingredients
 */
export const CheckoutForm = ({ pizza, ingredients }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const order = useSelector(getOrder);
  const { width: windowWidth } = useWindowDimensions();

  const {
    register,
    handleSubmit,
    errors,
    setValue,
    watch,
    formState: { touched, isDirty },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const сardNumber = watch('cardNumber');
  const { cardImageName, CardNumberValidation } = useValidCard(сardNumber);

  const onSubmit = handleSubmit(data => {
    let order = null;
    order = {
      pizza: pizza,
      address: data.address,
      cardName: data.cardName,
      cardNumber: data.cardNumber.toString(10),
    };
    if (order) {
      dispatch(checkoutReducer.actions.fillOrder(order));
      dispatch(sendOrderAsync(order));

      history.push('/order-confirm');
    }
  });

  const orderPrice = calculateTotalPrice(ingredients, pizza);

  const [normalizedCardNumber, setSormalizedCardNumber] = useState('');

  const handleNormalizeCardNumber = e => {
    const { value } = e.target;
    setValue('cardNumber', normalizeCardNumber(value));
    setSormalizedCardNumber(normalizeCardNumber(value));
  };
  const handleNormalizeCardCVV = e => {
    const { value } = e.target;
    setValue('cardNumber', normalizeCardCVV(value));
  };

  return (
    <Section>
      <Form onSubmit={onSubmit}>
        <OrderPreview
          order={order}
          pizza={pizza}
          cardImageName={cardImageName}
          normalizedCardNumber={normalizedCardNumber}
          isPaymentIconView={!!CardNumberValidation.card?.type}
        />
        <FormContent className='form'>
          <FormSection>
            <Legend>Адрес доставки</Legend>
            <label htmlFor='address'>
              <InputFieldwPlaceholder
                ref={register}
                name='address'
                id='address'
                type='text'
                placeholder='Введите адрес'
                invalid={!!errors.address && 'address'}
                valid={!errors.address && touched.address && 'address'}
              />
              <ErrorsMessage>{errors.address?.message}</ErrorsMessage>
            </label>
            <AddressDetails>
              <label htmlFor='porch'>
                подъезд
                <InputField
                  width='104'
                  margin='8'
                  ref={register}
                  name='porch'
                  id='porch'
                  type='tel'
                  valid={!errors.porch && touched.porch && 'porch'}
                />
              </label>
              <label htmlFor='flow'>
                этаж
                <InputField
                  width='104'
                  margin='8'
                  ref={register}
                  name='flow'
                  id='flow'
                  type='tel'
                  valid={!errors.flow && touched.flow && 'flow'}
                />
              </label>
              <label htmlFor='flat'>
                квартира
                <InputField
                  width='104'
                  ref={register}
                  name='flat'
                  id='flat'
                  type='tel'
                  valid={!errors.flat && touched.flat && 'flat'}
                />
              </label>
            </AddressDetails>
          </FormSection>
          <FormSection>
            <Legend>Данные для оплаты</Legend>
            <label htmlFor='cardNumber'>
              <InputWrapper>
                <InputFieldwPlaceholder
                  ref={register}
                  name='cardNumber'
                  id='cardNumber'
                  type='tel'
                  inputMode='numeric'
                  autoComplete='cc-number'
                  placeholder='Номер карты'
                  onChange={handleNormalizeCardNumber}
                  invalid={!!errors.cardNumber && 'cardNumber'}
                  valid={
                    !errors.cardNumber && touched.cardNumber && 'cardNumber'
                  }
                />

                {!!CardNumberValidation.card?.type && (
                  <ImageIcon cardImageName={cardImageName} width='30' />
                )}

                {errors.cardNumber?.message && (
                  <ErrorsMessage>{errors.cardNumber?.message}</ErrorsMessage>
                )}
              </InputWrapper>
            </label>
            <PaymentCardDetails>
              <label htmlFor='year'>
                <InputFieldwPlaceholder
                  width={windowWidth >= 960 ? '128' : '102'}
                  ref={register}
                  name='year'
                  id='year'
                  type='tel'
                  placeholder='MM/YYYY'
                  valid={!errors.year && touched.year && 'year'}
                />
              </label>
              <label htmlFor='CVV'>
                <InputFieldwPlaceholder
                  width={windowWidth >= 960 ? '76' : '64'}
                  ref={register}
                  name='CVV'
                  id='CVV'
                  type='tel'
                  placeholder='CVV'
                  onChange={handleNormalizeCardCVV}
                  valid={!errors['CVV'] && touched['CVV'] && 'CVV'}
                />
              </label>
            </PaymentCardDetails>
            <label htmlFor='cardName'>
              <InputFieldwPlaceholder
                ref={register}
                name='cardName'
                id='cardName'
                type='text'
                placeholder='Имя как на карте'
                invalid={!!errors.cardName && 'cardName'}
                valid={!errors.cardName && touched.cardName && 'cardName'}
              />
              <ErrorsMessage>{errors.cardName?.message}</ErrorsMessage>
            </label>
          </FormSection>
          <ArtemPromises>
            Доставим пиццу в течение часа или вернем деньги. Артем слов на ветер
            не бросает.
          </ArtemPromises>
        </FormContent>
        <OrderPayment className='payment'>
          <OrderPaymentSection>
            <span>Стоимость заказа</span> <span>{orderPrice} руб.</span>
          </OrderPaymentSection>
          <OrderPaymentSection>
            Доставка <span>{PIZZA_DELIVERY.price} руб.</span>
          </OrderPaymentSection>
          <DividingLine />
          <OrderPaymentSection toPay>
            К оплате <span>{orderPrice + PIZZA_DELIVERY.price} руб.</span>
          </OrderPaymentSection>
          {isDirty ? (
            <CheckoutFormButton type='submit' onClick={onSubmit}>
              Оплатить {orderPrice + PIZZA_DELIVERY.price} руб.
            </CheckoutFormButton>
          ) : (
            <CheckoutFormButton disabled>
              Заполните форму заказа
            </CheckoutFormButton>
          )}
        </OrderPayment>
      </Form>
    </Section>
  );
};
