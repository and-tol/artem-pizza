import React from 'react';
import { Message, Validate, ValidationRule } from 'react-hook-form';

export type NameAndPrice = { name: string; price: number };
export type Name = { name: string };
export type NameAndCase = { name: string; case: string };

export interface IngredientNameAndPriceState {
  [item: string]: NameAndPrice;
}
export interface IngredientNameState {
  [item: string]: Name;
}
export interface IngredientNameAndCaseState {
  [item: string]: NameAndCase;
}
export interface PizzaConfiguration {
  size: string;
  dough: string;
  sauce: string;
  cheese: string[];
  vegetables: string[];
  meat: string[];
}

export interface Login {
  password: string;
  email: string;
}

// React Hook Form register
export type RegisterOptions = Partial<{
  required: Message | ValidationRule<boolean>;
  min: ValidationRule<number | string>;
  max: ValidationRule<number | string>;
  maxLength: ValidationRule<number | string>;
  minLength: ValidationRule<number | string>;
  pattern: ValidationRule<RegExp>;
  // validate: Validate | Record<string, Validate>;
  validate: ValidationRule<string>;
}>;

export type refType =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

export interface IOrder {
  pizza: PizzaConfiguration;
  // ingredients: [null | undefined | PizzaConfiguration];
  address: string;
  cardName: string;
  cardNumber: string;
  id?: string;
}

export interface FormValues {
  address: string;
  porch: string;
  flow: string;
  flat: string;
  cardNumber: string;
  year: string;
  CVV: string;
  cardName: string;
}
export type IngredientFromServer = {
  id: string;
  name: string;
  slug: string;
  price: string;
  category: string;
  image: string;
  thumbnail: string;
};
export interface Ingredient {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  image: string;
  thumbnail: string;
}

// ! ---- States Types ---- //

export interface PizzaState {
  readonly pizza: PizzaConfiguration;
}
// export type PizzaState = {
//   pizza: PizzaConfiguration;
// };

export interface IngredientsState {
  readonly ingredients: Ingredient[];
  readonly error: ErrorState | null;
  readonly isLoading: boolean;
}
export interface OrdersState {
  readonly orders: IOrder[];
  readonly isLoading: boolean;
  readonly error: ErrorState | null;
}

export interface LoginState {
  readonly error: ErrorState | null;
  readonly isRegistered: boolean | null;
  readonly isLoading: boolean;
  readonly login: Login;
}

export interface SignupState {
  readonly error: ErrorState | null;
  readonly isRegistered: boolean | null;
  readonly isLoading: boolean;
  readonly login: Login;
}

export interface CheckoutState {
  readonly order: IOrder | null;
  readonly error: ErrorState | null;
  readonly isLoading: boolean;
  readonly isAccepted: boolean;
}
export type DispatchType = (args: PizzaAction) => PizzaAction;

/* export interface IAction<T, R = any, E = ErrorState | any | null> {
  type: T;
  payload: R;
  error: E;
} */

export interface ErrorState {
  status: number;
}

export type OrdersAction = {
  type: string;
  payload: IOrder[];
  error: ErrorState | null;
};

export type PizzaAction = {
  type: string;
  payload: PizzaConfiguration;
  error: any;
};

export interface IngredientsAction {
  type: string;
  payload: Ingredient[] | [];
  error: ErrorState | null;
}
export interface LoginAction {
  type: string;
  payload: any;
  error: any;
}
export interface SignupAction {
  type: string;
  payload: any;
  error: any;
}
export interface CheckoutAction {
  type: string;
  payload: any;
  error: any;
}

export interface State {
  readonly pizza: PizzaState;
  readonly ingredients: IngredientsState;
  readonly orders: OrdersState;
  readonly login: LoginState;
  readonly signup: SignupState;
  readonly checkout: CheckoutState;
}
