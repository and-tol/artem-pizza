import { IOrder, State } from '../../../types';

export const getOrders = (state: State): IOrder[] => state.orders.orders;
