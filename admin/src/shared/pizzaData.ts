import {
  IngredientNameAndCaseState,
  IngredientNameAndPriceState,
  IngredientNameState,
  PizzaConfiguration,
} from '../types';

export const categories = [
  { value: 'size', name: 'Размер' },
  { value: 'dough', name: 'Тесто' },
  { value: 'sauce', name: 'Соус' },
  { value: 'cheese', name: 'Сыр' },
  { value: 'vegetables', name: 'Овощ' },
  { value: 'meat', name: 'Мясо' },
];

export const DEFAULT_PIZZA: PizzaConfiguration = Object.freeze({
  size: '30',
  dough: 'thin',
  sauce: 'tomato',
  cheese: [],
  vegetables: [],
  meat: [],
});

// Category
/*
meets
cheese
vegs
dough
*/

export const SIZE: IngredientNameAndPriceState = Object.freeze({
  '30': { name: '30', price: 200 },
  '35': { name: '35', price: 250 },
});
export const DOUGH: IngredientNameAndCaseState = Object.freeze({
  thin: { name: 'Тонкое', case: 'тонком' },
  puffy: { name: 'Пышное', case: 'пышном' },
});
export const SAUCE: IngredientNameState = Object.freeze({
  tomato: { name: 'Томатный' },
  white: { name: 'Белый' },
  spicy: { name: 'Острый' },
});
export const CHEESE: IngredientNameAndPriceState = Object.freeze({
  mozarella: { name: 'Моцарелла', price: 29 },
  cheddar: { name: 'Чеддер', price: 29 },
  dorblue: { name: 'Дор Блю', price: 29 },
});
export const VEGETABLES: IngredientNameAndPriceState = Object.freeze({
  tomato: { name: 'Помидор', price: 29 },
  mushrooms: { name: 'Грибы', price: 29 },
  pepper: { name: 'Перец', price: 29 },
  pineapple: { name: 'Ананасы', price: 29 },
  olives: { name: 'Оливки', price: 29 },
  onion: { name: 'Лук', price: 29 },
  broccoli: { name: 'Брокколи', price: 29 },
  basil: { name: 'Базилик', price: 29 },
});
export const MEAT: IngredientNameAndPriceState = Object.freeze({
  bacon: { name: 'Бекон', price: 29 },
  pepperoni: { name: 'Пепперони', price: 29 },
  ham: { name: 'Ветчина', price: 29 },
});

// 'Моцарелла', 'Чеддер', 'Дор Блю';
// 'Помидор', 'Грибы', 'Перец', 'Ананасы', 'Оливки', 'Лук', 'Брокколи';
// 'Бекон', 'Пепперони', 'Ветчина';

export const PIZZA_DELIVERY = 180;

export const ingredients = [
  {
    id: '49idr5',
    name: 'Бекон',
    slug: 'bacon',
    price: 29,
    category: 'meat',
    image: 'bacon.npg',
    thumbnail: 'bacon.npg',
  },
  {
    id: 'mslcow9',
    name: 'Ветчина',
    slug: 'ham',
    price: 29,
    category: 'meat',
    image: 'ham.npg',
    thumbnail: 'ham.npg',
  },
];
