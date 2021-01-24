export const DEFAULT_PIZZA = Object.freeze({
  size: '30',
  dough: 'thin',
  sauce: 'tomato-sauce',
  cheese: [],
  vegetables: [],
  meat: [],
});

export const PIZZA_DELIVERY = 180;

export const fakeOrder = {
  pizza: {
    size: '30',
    dough: 'thin',
    sauce: 'tomato-sauce',
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
  { slug: 'puffy', case: 'пышном' },
];



// 'Пышное', 'Тонкое'
// 'Томатный','Белый','Острый'

// 'Моцарелла', 'Чеддер', 'Дор Блю';
// 'Помидор', 'Грибы', 'Перец', 'Ананасы', 'Оливки', 'Лук', 'Брокколи';
// 'Бекон', 'Пепперони', 'Ветчина';