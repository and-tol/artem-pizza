import { Message, ValidationRule, Validate } from 'react-hook-form';

export type NameAndPrice = { name: string; price: number };
export type Name = { name: string };

export interface IngredientNameAndPriceState {
  [item: string]: NameAndPrice;
}
export interface IngredientNameState {
  [item: string]: Name;
}
export interface PizzaConfiguration {
  size: string;
  dough: string;
  sauce: string;
  cheese: string[];
  vegetables: string[];
  meat: string[];
}

// export interface TotalPrice {
//   size: string;
//   dough?: string;
//   sauce?: string;
//   bacon: boolean;
//   broccoli: boolean;
//   cheddar: boolean;
//   dorblue: boolean;
//   ham: boolean;
//   mozarella: boolean;
//   mushrooms: boolean;
//   olives: boolean;
//   onion: boolean;
//   pepper: boolean;
//   pepperoni: boolean;
//   pineapple: boolean;
//   tomato: boolean;
// }



export interface TotalPrice {
  size: string;
  dough?: string;
  sauce?: string;
  cheese: string[];
  vegetables: string[];
  meat: string[];
}

// React Hook Form
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