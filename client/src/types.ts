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

export interface TotalPrice {
  size: string;
  dough?: string;
  sauce?: string;
  cheese: string[];
  vegetables: string[];
  meat: string[];
}

// React Hook Form register
export type RegisterOptions = Partial<{
  required: Message | ValidationRule<boolean>;
  min: ValidationRule<number | string>;
  max: ValidationRule<number | string>;
  maxLength: ValidationRule<number | string>;
  minLength: ValidationRule<number | string>;
  pattern: ValidationRule<RegExp>;
  validate: Validate | Record<string, Validate>;
}>;

export type refType =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

export type Order = {
  ingredients: [null | undefined | PizzaConfiguration];
  address: string;
  name: string;
  card_number: string;
};

export type NewIngredient = {
  id: string;
  name: string;
  slug: string;
  price: string;
  category: string;
  image: string;
};
