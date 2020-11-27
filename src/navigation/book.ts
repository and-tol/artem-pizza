import { Book } from '../types';
import { SignupPage } from './../signup-page/SignupPage';

export const book: Book = Object.freeze({
  root: {
    url: '/',
  },
  pizzaConfigurator: {
    url: '/configurator',
  },
  pizzaOrderPreview: {
    url: '/order-preview',
  },
  checkout: {
    url: '/checkout',
  },
  login: {
    url: '/login',
  },
  orderList: {
    url: '/order-list',
  },
  receipt: {
    url: '/receipt',
  },
  signup: {
    url: '/signup',
    page: SignupPage,
  },
});
