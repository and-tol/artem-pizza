import { Order, State } from '../../../types';

export const getOrders = (state: State): Order[] => state.orders.orders;
