import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { fetchOrdersListAsync } from './state/ordersListReducer';
import { fetchIngredientsAsync } from '../pizza-configurator-page/state-ingredients/ingredientsReducer';
// Selectors
import { getOrders, getLoadingStatus } from './state/ordersListSelectors';
// Components
import { Loader } from '../../share/components';
import { Order } from '../../share/components';

export const OrdersListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredientsAsync());
    dispatch(fetchOrdersListAsync());
  }, [dispatch]);

  const orders = useSelector(getOrders);
  const isLoading = useSelector(getLoadingStatus);

  /**
   * Устанавливает время изменения иконки у последненго заказа
   * Sets the change time for the icon for the last order
   */
  const [isInterval, setIsInterval] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => {
      setIsInterval(false);
    }, 3600000);
    return () => clearTimeout(id);
  }, []);

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
        orders.map((order, i) => (
          <Order
            key={order.id}
            order={order}
            pizza={order.pizza}
            sequence={i}
            isInterval={isInterval}
          />
        ))
      ) : (
        <span>Вы пока не сделали ни одного заказа</span>
      )}
    </>
  );
};
