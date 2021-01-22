import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { ordersListActions } from './state/ordersListActions';
import { ingredientsActions } from '../pizza-configurator-page/state-ingredients/actions';
// Selectors
import { getOrders, getLoadingStatus } from './state/ordersListselectors';
// Components
import { Order } from '../../share/components';

export const OrdersListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ingredientsActions.fetchIngredientsAsync());
    dispatch(ordersListActions.fetchOrdersAsync());
  }, [dispatch]);

  const previousOrders = useSelector(getOrders);
  const isLoading = useSelector(getLoadingStatus);

  return (
    <>
      <h1 data-testid="orders">Заказы</h1>
      {isLoading && <p>Загрузка данных...</p>}
      {previousOrders.length ? (
        previousOrders.map(order => <Order key={order.id} order={order} />)
      ) : (
        <span>Вы пока не сделали ни одного заказа</span>
      )}
    </>
  );
};
