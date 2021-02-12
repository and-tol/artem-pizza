export const DEFAULT_PIZZA = Object.freeze({
  size: '30',
  dough: 'thin',
  sauces: 'tomato-sauce',
  cheese: [],
  vegetables: [],
  meat: [],
});

export const PIZZA_DATA_PRIMARY = Object.freeze({
  size: [
    {
      category: 'size',
      name: '30',
      price: 200,
      slug: '30',
    },
    {
      category: 'size',
      name: '35',
      price: 250,
      slug: '35',
    },
  ],
  dough: [
    {
      category: 'dough',
      name: 'тонкое',
      price: 0,
      slug: 'thin',
      case: 'тонком',
    },
    {
      category: 'dough',
      name: 'толстое',
      price: 0,
      slug: 'thick',
      case: 'толстом',
    },
  ],
  delivery: {
    price: 180,
    status: {
      in_progress: { code: '0', case: 'В работе', icon: 'icn_in-progress' },
      in_transit: { code: '1', case: 'Доставляется', icon: 'icn_delivery' },
      delivered: { code: '2', case: 'Доставлен', icon: 'icn_check' },
      repeat: { code: '3', case: 'Повторить заказ', icon: 'icn_repeat' },
    },
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

export const INGREDIENTS_CASES = [
  { slug: 'thin', case: 'тонком' },
  { slug: 'thick', case: 'толстом' },
];

// 'Толстое', 'Тонкое'
// 'Томатный','Белый','Острый'

// 'Моцарелла', 'Чеддер', 'Дор Блю';
// 'Помидор', 'Грибы', 'Перец', 'Ананасы', 'Оливки', 'Лук', 'Брокколи';
// 'Бекон', 'Пепперони', 'Ветчина';
