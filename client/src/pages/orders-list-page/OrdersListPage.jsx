import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { fetchOrdersListAsync } from './state/ordersListReducer';
import { fetchIngredientsAsync } from '../pizza-configurator-page/state-ingredients/ingredientsReducer';
// Selectors
import { getOrders, getLoadingStatus } from './state/ordersListSelectors';
// Components
import { Order, Loader } from '../../share/components';

export const OrdersListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredientsAsync());
    dispatch(fetchOrdersListAsync());
  }, [dispatch]);

  const previousOrders = useSelector(getOrders);
  const isLoading = useSelector(getLoadingStatus);

  return (
    <>
      {/* {false ? (
        <Loader />
      ) : previousOrders.length ? (
        previousOrders.map(order => <Order key={order.id} order={order} />)
      ) : (
        <span>Вы пока не сделали ни одного заказа</span>
      )} */}
    </>
  );
};
