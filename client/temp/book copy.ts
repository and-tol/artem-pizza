import * as H from "history";
import { CheckoutPage } from '../src/pages/CheckoutPage/CheckoutPage';
import { LoginPage } from '../src/pages/login-page/LoginPage';
import { OrdersListPage } from '../src/pages/OrdersListPage/OrdersListPage';
import { PizzaConfiguratorPage } from '../src/pages/pizza-configurator-page/PizzaConfiguratorPage';
import { ReceiptPage } from '../src/pages/receipt-page/ReceiptPage';
import { SignupPage } from '../src/pages/signup-page/SignupPage';

PizzaConfiguratorPage;
// import { Book } from '../src/types';
// +++++++++
export type Page = {
  url:
    | string
    | H.LocationDescriptorObject<unknown>
    | ((location: H.Location<unknown>) => H.LocationDescriptor<unknown>);
  page?: <T>({}: T) => JSX.Element;

};

export interface Book {
  [item: string]: Page;
  // +++++++++++++++++


export const book: Book = Object.freeze({
  root: {
    url: '/',
  },
  pizzaConfigurator: {
    url: '/configurator',
    page: PizzaConfiguratorPage,
  },
  pizzaOrderPreview: {
    url: '/order-preview',
    page: PizzaOrderPreviewPage,
  },
  checkout: {
    url: '/checkout',
    page: CheckoutPage,
  },
  login: {
    url: '/login',
    page: LoginPage,
  },
  orderList: {
    url: '/order-list',
    page: OrdersListPage,
  },
  receipt: {
    url: '/receipt',
    page: ReceiptPage,
  },
  signup: {
    url: '/signup',
    page: SignupPage,
  },
});

/*
(JSX attribute) path?: string | string[] | undefined
Ни одна перегрузка не соответствует этому вызову.
  Перегрузка 1 из 2, "(props: RouteProps | Readonly<RouteProps>): Route<RouteProps>", возвратила следующую ошибку.
    Тип "string | LocationDescriptorObject<unknown> | ((location: Location<unknown>) => LocationDescriptor<unknown>)" не может быть назначен для типа "string | string[] | undefined".
      Тип "LocationDescriptorObject<unknown>" не может быть назначен для типа "string | string[] | undefined".
        Тип "LocationDescriptorObject<unknown>" не может быть назначен для типа "string".
  Перегрузка 2 из 2, "(props: RouteProps, context: any): Route<RouteProps>", возвратила следующую ошибку.
    Тип "string | LocationDescriptorObject<unknown> | ((location: Location<unknown>) => LocationDescriptor<unknown>)" не может быть назначен для типа "string | string[] | undefined".
      Тип "LocationDescriptorObject<unknown>" не может быть назначен для типа "string | string[] | undefined".
        Тип "LocationDescriptorObject<unknown>" не может быть назначен для типа "string".ts(2769)
index.d.ts(91, 5): Ожидаемый тип поступает из свойства "path", объявленного здесь в типе "IntrinsicAttributes & IntrinsicClassAttributes<Route<RouteProps>> & Readonly<RouteProps> & Readonly<...>"
index.d.ts(91, 5): Ожидаемый тип поступает из свойства "path", объявленного здесь в типе "IntrinsicAttributes & IntrinsicClassAttributes<Route<RouteProps>> & Readonly<RouteProps> & Readonly<...>"
*/