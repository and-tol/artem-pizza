import { IOrder, State } from '../../../types';

export const getOrders = (state: State): IOrder[] => state.orders.orders;

export const getLoadingStatus = (state: State): boolean => state.orders.isLoading;
