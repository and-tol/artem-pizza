import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { fetchOrdersListAsync } from './state/ordersListReducer';
import { fetchIngredientsAsync } from '../pizza-configurator-page/state-ingredients/ingredientsReducer';
// Selectors
import { getOrders, getLoadingStatus } from './state/ordersListSelectors';
// Components
import { Loader } from '../../share/components';
import { PreviousOrder } from './components'

export const OrdersListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredientsAsync());
    dispatch(fetchOrdersListAsync());
  }, [dispatch]);

  const orders = useSelector(getOrders);
  const isLoading = useSelector(getLoadingStatus);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <>
      {orders.length ? (
        orders.map(order => <PreviousOrder key={order.id} order={order} />)
      ) : (
        <span>Вы пока не сделали ни одного заказа</span>
      )}
    </>
  );
};
