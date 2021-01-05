import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { ordersListActions } from './state/actions';
import { ingredientsActions } from '../pizza-configurator-page/state-ingredients/actions';
// Selectors
import { getOrders, getLoadingStatus } from './state/selectors';
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

  if (isLoading) {
    return <p>Загрузка данных...</p>;
  }

  return (
    <>
      <h1>Заказы</h1>
      {previousOrders.length ? (
        previousOrders.map(order => <Order key={order.id} order={order} />)
      ) : (
        <span>Вы пока не сделали ни одного заказа</span>
      )}
    </>
  );
};
