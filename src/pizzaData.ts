export type PizzaDataWithPrice = { name: string; price: number };
export type PizzaData = { name: string };

export interface SizeType {
  '30': PizzaDataWithPrice;
  '35': PizzaDataWithPrice;
}
export interface DoughType {
  thin: PizzaData;
  puffy: PizzaData;
}
export interface SauceType {
  tomato: PizzaData;
  white: PizzaData;
  spicy: PizzaData;
}
export interface CheeseType {
  mozarella: PizzaDataWithPrice;
  cheddar: PizzaDataWithPrice;
  dorblue: PizzaDataWithPrice;
}
export interface VegetablesType {
  tomato: PizzaDataWithPrice;
  mushrooms: PizzaDataWithPrice;
  peper: PizzaDataWithPrice;
  pineapple: PizzaDataWithPrice;
  olives: PizzaDataWithPrice;
  onion: PizzaDataWithPrice;
  broccoli: PizzaDataWithPrice;
  bacon: PizzaDataWithPrice;
  pepperoni: PizzaDataWithPrice;
  ham: PizzaDataWithPrice;
}

export const SIZE: SizeType = Object.freeze({
  '30': { name: '30', price: 200 },
  '35': { name: '35', price: 250 },
});
export const DOUGH: DoughType = Object.freeze({
  thin: { name: 'Тонкое' },
  puffy: { name: 'Пышное' },
});
export const SAUCE: SauceType = Object.freeze({
  tomato: { name: 'Томатный' },
  white: { name: 'Белый' },
  spicy: { name: 'Острый' },
});
export const CHEESE = Object.freeze({
  mozarella: { name: 'Моцарелла', price: 29 },
  cheddar: { name: 'Чеддер', price: 29 },
  dorblue: { name: 'Дор Блю', price: 29 },
});
export const VEGETABLES = Object.freeze({
  tomato: { name: 'Помидор', price: 29 },
  mushrooms: { name: 'Грибы', price: 29 },
  peper: { name: 'Перец', price: 29 },
  pineapple: { name: 'Ананасы', price: 29 },
  olives: { name: 'Оливки', price: 29 },
  onion: { name: 'Лук', price: 29 },
  broccoli: { name: 'Брокколи', price: 29 },
  bacon: { name: 'Бекон', price: 29 },
  pepperoni: { name: 'Пепперони', price: 29 },
  ham: { name: 'Ветчина', price: 29 },
});
