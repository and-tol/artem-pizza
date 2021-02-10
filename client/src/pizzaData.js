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
    in_progress: { kode: '0', case: 'В работе', icon: '' },
    in_transit: { kode: '1', case: 'Доставляется', icon: 'icn_delivery' },
    delivered: { kode: '2', case: 'Доставлен', icon: '' },
    repeat: { kode: '3', case: 'Повторить заказ', icon: 'icn_repeat' },
  },
});

export const PAYMENT_CARD = Object.freeze({
  'american-express': 'Amex',
  Bancontact: 'Bancontact',
  'diners-club': 'DinersClub',
  discover: 'Discover',
  elo: 'Elo',
  maestro: 'Maestro',
  mastercard: 'MasterCard',
  UnionPay: 'UnionPay',
  visa: 'Visa',
  jcb: 'JCB',
  unionpay: 'UnionPay',
  mir: 'Mir',
  hiper: 'Hiper',
  hipercard: 'Hipercard',
});
// export const PAYMENT_CARD = Object.freeze({
//   'american-express': 'Amex',
//   Bancontact: 'Bancontact',
//   'diners-club': 'DinersClub',
//   discover: 'Discover',
//   elo: 'Elo',
//   maestro: 'Maestro',
//   mastercard: 'MasterCard',
//   UnionPay: 'UnionPay',
//   visa: 'Visa',
//   jcb: 'JSB',
//   unionpay: 'UnionPay',
//   mir: 'Mir',
//   hiper: 'Hiper',
//   hipercard: 'Hipercard',
// });

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
