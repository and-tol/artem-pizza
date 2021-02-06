import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
// ---
import {dateShow} from '../../share/helpers/dateShow'
// ---
// Images
import orderError from '../../asserts/icons/order-status_error.svg';
import orderSuccess from '../../asserts/icons/order-status_ok.svg';
// Fake Data
import { fakeOrder } from '../../pizzaData';
// Components
import { Order } from '../../share/components';
// Selectors
import { getOrder } from '../checkout-page/state/checkoutSelectors';
// Styles
import { ButtonPrimary } from '../../share/styled-components';
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
  padding-top: 40px;
  @media (min-width: 960) {
    padding-top: 72px;
  }
  img {
    margin-bottom: 24px;
  }
`;
const MainInfo = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 8px;
  @media (min-width: 960px) {
    font-size: 24px;
    line-height: 32px;
  }
`;
const AdditionalInfo = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 32px;

  @media (min-width: 960px) {
    font-size: 20px;
    margin-bottom: 40px;
  }
`;
const Button = styled(ButtonPrimary)``;

/**
 * Страница подтверждения заказа
 * Component Order confirmation page
 */
export const OrderConfirmPage = () => {
  const history = useHistory();
  const isAccepted = useSelector(getOrder);

  const tryOrderAgain = () => {
    history.push('/checkout');
  };

  console.log(dateShow());

  return (
    <>
      {!isAccepted && (
        <Section>
          <img src={orderSuccess} alt='success' />

          <MainInfo>Спасибо за заказ!</MainInfo>
          <AdditionalInfo>
            Заказ успешно оплачен, ждите вашу пиццу уже через час
          </AdditionalInfo>
          {/* FIXME: make it work  */}
          {/* <Order order={fakeOrder} /> */}
        </Section>
      )}
      {isAccepted && (
        <Section>
          <img src={orderError} alt='error' />
          <MainInfo>Оплата не прошла</MainInfo>
          <AdditionalInfo>
            Попробуйте еще раз или используйте другую карту
          </AdditionalInfo>
          <Button onClick={tryOrderAgain}>
            Попробовать еще раз
          </Button>
        </Section>
      )}
    </>
  );
};
