export type PizzaDataWithPrice = { name: string; price: number };
export type PizzaData = { name: string };

export interface DataWithPriceType {
  [item: string]: PizzaDataWithPrice;
}
export interface DataWithoutPriceType {
  [item: string]: PizzaData;
}
export interface PizzaConfiguration {
  size: string;
  dough: string;
  sauce: string;
  cheese?: string[];
  vegetables?: string[];
  meat?: string[];
}