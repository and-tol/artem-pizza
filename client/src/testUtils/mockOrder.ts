import { IOrder } from '../types';
import { mockDefaultPizza } from './mockDefaultPizza';

export const mockOrder: IOrder = {
  pizza: mockDefaultPizza,
  address: 'test_address',
  cardName: 'test_name',
  cardNumber: 'test_card_number',
  id: 'test_id',
};
