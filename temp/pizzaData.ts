import { PizzaData, PizzaOrder } from './types';

export const pizzaData: PizzaData = Object.freeze({
  pizzaSize: [
    { value: '30', name: 'size30', price: 200 },
    { value: '35', name: 'size35', price: 250 },
  ],
  pizzaDough: [
    { value: 'Тонкое', name: 'thinDough' },
    { value: 'Пышное', name: 'puffyDough' },
  ],
  pizzaSauce: [
    { value: 'Томатный', name: 'tomatoSauce' },
    { value: 'Белый', name: 'whiteSauce' },
    { value: 'Острый', name: 'spicySauce' },
  ],
  pizzaCheese: [
    {
      value: 'Моцарелла',
      name: 'mozarella',
      img: '/img/products/mozarella.png',
      price: 29,
    },
    {
      value: 'Чеддер',
      name: 'cheddar',
      img: '/img/products/cheddar.png',
      price: 29,
    },
    {
      value: 'Дор Блю',
      name: 'dorblue',
      img: '/img/products/dor-blue.png',
      price: 29,
    },
  ],
  pizzaVegetables: [
    {
      value: 'Помидор',
      name: 'tomato',
      img: '/img/products/tomato.png',
      price: 29,
    },
    {
      value: 'Грибы',
      name: 'mushrooms',
      img: '/img/products/mashrooms.png',
      price: 29,
    },
    {
      value: 'Перец',
      name: 'pepper',
      img: '/img/products/pepper.png',
      price: 29,
    },
    {
      value: 'Ананасы',
      name: 'pineapple',
      img: '/img/products/pineapple.png',
      price: 29,
    },
    {
      value: 'Оливки',
      name: 'olives',
      img: '/img/products/olives.png',
      price: 29,
    },
    {
      value: 'Лук',
      name: 'onion',
      img: '/img/products/onion.png',
      price: 29,
    },
    {
      value: 'Брокколи',
      name: 'broccoli',
      img: '/img/products/broccoli.png',
      price: 29,
    },
  ],
  pizzaMeat: [
    {
      value: 'Бекон',
      name: 'bacon',
      img: '/img/products/bacon.png',
      price: 29,
    },
    {
      value: 'Пепперони',
      name: 'pepperoni',
      img: '/img/products/pepperoni.png',
      price: 29,
    },
    {
      value: 'Ветчина',
      name: 'ham',
      img: '/img/products/ham.png',
      price: 29,
    },
  ],
});

export const START_PRICE: number = pizzaData.pizzaSize[0].price;

export const DEFAULT_PIZZA_ORDER: PizzaOrder = {
  pizzaName: 'Ленивая Маргарита',
  size: '30',
  dough: 'Тонкое',
  sauce: 'Томатный',
  cheese: [],
  vegetables: [],
  meat: [],
  ingredients: [],
  totalPrice: START_PRICE,
};
