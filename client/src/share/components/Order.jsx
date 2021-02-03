import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// Icons
import { ReactComponent as IconDelivery } from '../../asserts/icons/icn_delivery.svg';
// Actions
import { fetchIngredientsAsync } from '../../pages/pizza-configurator-page/state-ingredients/ingredientsReducer';
// Selectors
import { getIngredients } from '../../pages/pizza-configurator-page/state-ingredients/ingredientsSelectors';
// Data
import { PIZZA_DELIVERY } from '../../pizzaData';
// TODO: +++++++++
import { calculateTotalPrice } from '../calculateTotalPrice';
// Hooks
import { useWindowDimensions } from '../hooks/useWindowDimentions';
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
const OrderPreviewFooterDelivery = styled.span`
  display: flex;
  align-items: center;
  margin-left: auto;
  font-weight: 500;
  color: var(--secondary);
`;
const DeliveryText = styled.span`
  margin-left: 8px;
`;

export const Order = props => {
  const { width: windowWidth } = useWindowDimensions();
  const dispatch = useDispatch();
  const { order, pizza } = props;

  useEffect(() => {
    dispatch(fetchIngredientsAsync());
  }, [dispatch]);

  const ingredients = useSelector(getIngredients);
  const totalPrice = calculateTotalPrice(ingredients, pizza);

  return (
    <Article>
      <OrderPreviewHeader>
        Заказ <span>2390</span>
        <OrderTime>
          <time dateTime='2020-10-21 13:40'>21 октября 2020, 13:40</time>
          {windowWidth >= 960 && <span> • {PIZZA_DELIVERY.status[0]}</span>}
        </OrderTime>
      </OrderPreviewHeader>

      <OrderPreview pizza={pizza} ingredients={ingredients} />

      <OrderPreviewFooter>
        <Price>{totalPrice} руб</Price>
        <span>{order && ` ${order.cardNumber?.slice(-4)} `}</span>
        <OrderPreviewFooterDelivery>
          <IconDelivery fill='var(--secondary)' />
          <DeliveryText>Доставляется</DeliveryText>
        </OrderPreviewFooterDelivery>
      </OrderPreviewFooter>
    </Article>
  );
};
