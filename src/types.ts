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
  cheese?: string[];
  vegetables?: string[];
  meat?: string[];
}