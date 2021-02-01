export const DEFAULT_PIZZA = Object.freeze({
  size: '30',
  dough: 'thin',
  sauces: 'tomato-sauce',
  cheese: [],
  vegetables: [],
  meat: [],
});

// export const PIZZA_DELIVERY.price = 180;

export const PIZZA_DELIVERY = Object.freeze({
  price: 180,
  status: {
    0: 'В работе',
    1: 'Доставляется',
    2: 'Доставлен',
    3: 'Повторить заказ',
  },
});

export const fakeOrder = {
  pizza: {
    size: '30',
    dough: 'thin',
    sauces: 'tomato-sauce',
    cheese: [],
    vegetables: ['tomato'],
    meat: ['ham'],
  },
  address: 'Ivanovskaya street 7-1',
  cardName: 'Ivan Ivanov',
  cardNumber: '4545454545454545',
};

export const IngredientsCases = [
  { slug: 'thin', case: 'тонком' },
  { slug: 'thick', case: 'толстом' },
];

// 'Толстое', 'Тонкое'
// 'Томатный','Белый','Острый'

// 'Моцарелла', 'Чеддер', 'Дор Блю';
// 'Помидор', 'Грибы', 'Перец', 'Ананасы', 'Оливки', 'Лук', 'Брокколи';
// 'Бекон', 'Пепперони', 'Ветчина';
