import React, { useEffect, useState } from 'react';
// Api
import { api } from '../../api';
// Components
import { PreviousOrder } from './components';
// Types
import { Order } from '../../types';

export const OrdersListPage = () => {
  const [previousOrders, setPreviousOrders] = useState<Order[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.orders.showAllOrders();
      const results = await response.json();

      setPreviousOrders(results);
    };

    getData();
  }, []);

  return (
    <>
      <h1>Заказы</h1>
      {/* {previousOrders.length ? (
        previousOrders.map((order, i) => (
          <PreviousOrder key={i} order={order} />
        ))
      ) : (
        <span>Вы пока не сделали ни одного заказа</span>
      )} */}
    </>
  );
};
