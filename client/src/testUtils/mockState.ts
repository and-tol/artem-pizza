import { RootState } from '../init/rootReducer';
import { mockDefaultPizza } from './mockDefaultPizza';

export const mockState: RootState = {
  pizza: {
    pizza: mockDefaultPizza,
  },
  ingredients: {
    ingredients: [
      {
        id: 'mock_id_1',
        name: 'mock_name_1',
        slug: 'mock_slug_1',
        price: 1,
        category: 'mock_category_1',
        image: 'mock_image_1',
        thumbnail: 'mock_thumbnail_1',
      },
      {
        id: 'mock_id_2',
        name: 'mock_name_2',
        slug: 'mock_slug_2',
        price: 2,
        category: 'mock_category_2',
        image: 'mock_image_2',
        thumbnail: 'mock_thumbnail_2',
      },
    ],
    error: null,
    isLoading: false,
  },
  orders: {
    orders: [],
    isLoading: false,
    error: null,
  },
  login: {
    error: null,
    isRegistered: false,
    isLoading: false,
    login: {
      password: 'password',
      email: 'email',
    },
  },
  signup: {
    error: null,
    isRegistered: null,
    isLoading: false,
    login: {
      password: 'password',
      email: 'email',
    },
  },
  checkout: {
    order: null,
    error: null,
    isLoading: false,
    isAccepted: true,
  },
};
