export type PizzaDataWithPrice = { name: string; price: number };
export type PizzaData = { name: string };

export interface DataWithPriceType {
  [item: string]: PizzaDataWithPrice;
}
export interface DataWithoutPriceType {
  [item: string]: PizzaData;
}

// export interface SizeType {
//   '30': PizzaDataWithPrice;
//   '35': PizzaDataWithPrice;
// }
// export interface DoughType {
//   thin: PizzaData;
//   puffy: PizzaData;
// }
// export interface SauceType {
//   tomato: PizzaData;
//   white: PizzaData;
//   spicy: PizzaData;
// }
// export interface CheeseType {
//   mozarella: PizzaDataWithPrice;
//   cheddar: PizzaDataWithPrice;
//   dorblue: PizzaDataWithPrice;
// }
// export interface VegetablesType {
//   tomato: PizzaDataWithPrice;
//   mushrooms: PizzaDataWithPrice;
//   pepper: PizzaDataWithPrice;
//   pineapple: PizzaDataWithPrice;
//   olives: PizzaDataWithPrice;
//   onion: PizzaDataWithPrice;
//   broccoli: PizzaDataWithPrice;
//   bacon: PizzaDataWithPrice;
//   pepperoni: PizzaDataWithPrice;
//   ham: PizzaDataWithPrice;
// }

export interface PizzaConfiguration {
  size: string;
  dough: string;
  sauce: string;
  cheese?: string[];
  vegetables?: string[];
  meat?: string[];
}