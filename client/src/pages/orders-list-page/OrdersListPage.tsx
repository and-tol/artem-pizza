import React, { useEffect, useState } from 'react';
// Api
import { api } from '../../api';
// Components
import { Order } from '../../share/components';
// Types
import { IOrder } from '../../types';

export const OrdersListPage = () => {
  const [previousOrders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.orders.showAllOrders();
      const results = await response.json();

      setOrders(results);
    };

    getData();
  }, []);

  return (
    <>
      <h1>Заказы</h1>
      {previousOrders.length ? (
        previousOrders.map((order, i) => <Order key={i} order={order} />)
      ) : (
        <span>Вы пока не сделали ни одного заказа</span>
      )}
    </>
  );
};
