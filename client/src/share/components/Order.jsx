import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
// Icons
import { ReactComponent as IconDelivery } from '../../asserts/icons/icn_delivery.svg';
import { ReactComponent as IconProgress } from '../../asserts/icons/icn_in-progress.svg';
import { ReactComponent as IconRepeat } from '../../asserts/icons/icn_repeat.svg';
// Selectors
import { getIngredients } from '../../pages/PizzaConfiguratorPage/state-ingredients/ingredientsSelectors';
// Data
import { PIZZA_DATA_PRIMARY } from '../../pizzaData';
import { calculateTotalPrice } from '../calculateTotalPrice';
// Helpers
import { dateShow, dateTime } from '../helpers';
import { ImageIcon } from './ImageIcon';
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

  @media (max-width: 959.5px) {
    width: 100%;
  }
  @media (min-width: 960px) {
    width: 600px;
    max-width: 100%;
  }
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
  color: ${({ color }) => color};
`;
const DeliveryButtonText = styled.span`
  white-space: nowrap;
  margin-left: 8px;
  color: ${({ color }) => color};
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
  sequence,
  isInterval,
  repeatPizzaOrder,
}) => {
  const location = useLocation();
  const ingredients = useSelector(getIngredients);
  const totalPrice = calculateTotalPrice(ingredients, pizza);

  return (
    <Article>
      <OrderPreviewHeader>
        Заказ <span>2390</span>
        <OrderTime>
          <time dateTime={dateTime()}>{dateShow()}</time>
          {false && (
            <span> • {PIZZA_DATA_PRIMARY.delivery.status.in_work.case}</span>
          )}
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
        {location.pathname === '/checkout' && (
          <OrderPreviewFooterDelivery color='var(--gray600)'>
            <IconProgress width='16' fill='var(--gray600)' />
            <DeliveryButtonText>
              {PIZZA_DATA_PRIMARY.delivery.status.in_progress.case}
            </DeliveryButtonText>
          </OrderPreviewFooterDelivery>
        )}
        {location.pathname === '/order-confirm' && (
          <OrderPreviewFooterDelivery>
            <IconDelivery fill='var(--secondary)' />
            <DeliveryButtonText>
              {PIZZA_DATA_PRIMARY.delivery.status.in_transit.case}
            </DeliveryButtonText>
          </OrderPreviewFooterDelivery>
        )}
        {location.pathname === '/orders-list' && sequence !== 0 && (
          <OrderPreviewFooterDelivery>
            <ButtonRepeat
              type='button'
              onClick={() => repeatPizzaOrder(sequence)}
            >
              <IconRepeat fill='var(--primary)' />
              <DeliveryButtonText color='var(--primary)'>
                {PIZZA_DATA_PRIMARY.delivery.status.repeat.case}
              </DeliveryButtonText>
            </ButtonRepeat>
          </OrderPreviewFooterDelivery>
        )}
        {location.pathname === '/orders-list' && sequence === 0 && (
          <OrderPreviewFooterDelivery>
            {isInterval ? (
              <>
                <IconDelivery fill='var(--secondary)' />
                <DeliveryButtonText color='var(--secondary)'>
                  {PIZZA_DATA_PRIMARY.delivery.status.in_transit.case}
                </DeliveryButtonText>
              </>
            ) : (
              <>
                <ButtonRepeat
                  type='button'
                  onClick={() => repeatPizzaOrder(sequence)}
                >
                  <IconRepeat fill='var(--primary)' />
                  <DeliveryButtonText color='var(--primary)'>
                    {PIZZA_DATA_PRIMARY.delivery.status.repeat.case}
                  </DeliveryButtonText>
                </ButtonRepeat>
              </>
            )}
          </OrderPreviewFooterDelivery>
        )}
      </OrderPreviewFooter>
    </Article>
  );
};

Order.propTypes = {
  order: PropTypes.object,
  pizza: PropTypes.shape({
    size: PropTypes.string,
    dough: PropTypes.string,
    sauces: PropTypes.string,
    cheese: PropTypes.array,
    vegetables: PropTypes.array,
    meat: PropTypes.array,
  }),
  cardImageName: PropTypes.string,
  isPaymentIconView: PropTypes.bool,
  normalizedCardNumber: PropTypes.string,
  sequence: PropTypes.number,
  isInterval: PropTypes.bool,
  repeatPizzaOrder: PropTypes.func,
};
