import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// Helpers
import { dateShow, dateTime } from '../helpers';
// Icons
import { ReactComponent as IconDelivery } from '../../asserts/icons/icn_delivery.svg';
import { ReactComponent as IconRepeat } from '../../asserts/icons/icn_repeat.svg';
import { ImageIcon } from './ImageIcon';
// Actions
import { fetchIngredientsAsync } from '../../pages/pizza-configurator-page/state-ingredients/ingredientsReducer';
// Selectors
import { getIngredients } from '../../pages/pizza-configurator-page/state-ingredients/ingredientsSelectors';
// Data
import { PIZZA_DELIVERY } from '../../pizzaData';

import { calculateTotalPrice } from '../calculateTotalPrice';

// Components
import { OrderPreview } from './OrderPreview';
// Styles
const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  margin-bottom: 16px;
  max-width: 350px;
`;

const OrderPreviewHeader = styled.header`
  margin-bottom: 16px;
  span {
    margin-right: 16px;
    @media (min-width: 960px) {
      margin-right: 38px;
    }
  }
`;

const OrderTime = styled.span`
  color: var(--gray400);
`;

const LastDigitPaymentCard = styled.span`
  font-size: 14px;
  padding-left: 4px;
`;

const OrderPreviewFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 0 2px;
  border-top: 1px dashed var(--gray200);
`;
const Price = styled.span`
  font-weight: 800;
  margin-right: 15px;
`;
const OrderPreviewFooterDelivery = styled.div`
  display: inline-flex;
  align-items: center;
  margin-left: auto;
  font-weight: 500;
  color: var(--secondary);
`;
const DeliveryText = styled.span`
  margin-left: 8px;
`;
const ButtonRepeat = styled.button`
  white-space: nowrap;
  color: var(--primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover,
  &:active {
    color: var(--primary-dark);
  }
`;

export const Order = ({
  order,
  pizza,
  cardImageName,
  isPaymentIconView,
  normalizedCardNumber,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredientsAsync());
  }, [dispatch]);

  const ingredients = useSelector(getIngredients);
  const totalPrice = calculateTotalPrice(ingredients, pizza);

  const repeatPizza = () => {

  }

  return (
    <Article>
      <OrderPreviewHeader>
        Заказ <span>2390</span>
        <OrderTime>
          <time dateTime={dateTime()}>{dateShow()}</time>
          {false && <span> • {PIZZA_DELIVERY.status.in_work.case}</span>}
        </OrderTime>
      </OrderPreviewHeader>

      <OrderPreview pizza={pizza} ingredients={ingredients} />

      <OrderPreviewFooter>
        <Price>{totalPrice} руб</Price>
        {isPaymentIconView && cardImageName && (
          <ImageIcon cardImageName={cardImageName} width='30' />
        )}
        {order && (
          <LastDigitPaymentCard>
            {order.cardNumber?.slice(-4)}
          </LastDigitPaymentCard>
        )}
        {!order &&
          normalizedCardNumber &&
          normalizedCardNumber?.length >= 13 && (
            <LastDigitPaymentCard>
              {normalizedCardNumber?.slice(-4)}
            </LastDigitPaymentCard>
          )}
        <OrderPreviewFooterDelivery>
          <IconDelivery fill='var(--secondary)' />
          <DeliveryText>{PIZZA_DELIVERY.status.in_transit.case}</DeliveryText>
        </OrderPreviewFooterDelivery>
        {/* <OrderPreviewFooterDelivery>
          <ButtonRepeat type='button' onClick={repeatPizza}>
            <IconRepeat fill='var(--primary)' />
            <DeliveryText>{PIZZA_DELIVERY.status.repeat.case}</DeliveryText>
          </ButtonRepeat>
        </OrderPreviewFooterDelivery> */}
      </OrderPreviewFooter>
    </Article>
  );
};
