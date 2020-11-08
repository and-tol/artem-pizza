export type PizzaOptions = { value: string; name: string; price?: number };
export type PizzaIngredients = {
  value: string;
  name: string;
  url: string;
  price: number;
};

interface PizzaData {
  pizzaSize: PizzaOptions[];
  pizzaDough: PizzaOptions[];
  pizzaSauce: PizzaOptions[];
  pizzaCheese: PizzaIngredients[];
  pizzaVegetables: PizzaIngredients[];
  pizzaMeat: PizzaIngredients[];
}

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
      name: 'mozarellaCheese',
      url: '/img/products/mozarella.png',
      price: 29,
    },
    {
      value: 'Чеддер',
      name: 'cheddarCheese',
      url: '/img/products/cheddar.png',
      price: 29,
    },
    {
      value: 'Дор Блю',
      name: 'dornameblueCheese',
      url: '/img/products/dor-blue.png',
      price: 29,
    },
  ],
  pizzaVegetables: [
    {
      value: 'Помидор',
      name: 'tomatoVegetable',
      url: '/img/products/tomato.png',
      price: 29,
    },
    {
      value: 'Грибы',
      name: 'mushroomsVegetable',
      url: '/img/products/mashrooms.png',
      price: 29,
    },
    {
      value: 'Перец',
      name: 'pepperVegetable',
      url: '/img/products/pepper.png',
      price: 29,
    },
    {
      value: 'Ананасы',
      name: 'pineappleVegetable',
      url: '/img/products/pineapple.png',
      price: 29,
    },
    {
      value: 'Оливки',
      name: 'olivesVegetable',
      url: '/img/products/olives.png',
      price: 29,
    },
    {
      value: 'Лук',
      name: 'onionVegetable',
      url: '/img/products/onion.png',
      price: 29,
    },
    {
      value: 'Брокколи',
      name: 'broccoliVegetable',
      url: '/img/products/broccoli.png',
      price: 29,
    },
  ],
  pizzaMeat: [
    {
      value: 'Бекон',
      name: 'baconMeat',
      url: '/img/products/bacon.png',
      price: 29,
    },
    {
      value: 'Пепперони',
      name: 'pepperoniMeat',
      url: '/img/products/pepperoni.png',
      price: 29,
    },
    {
      value: 'Ветчина',
      name: 'hamMeat',
      url: '/img/products/ham.png',
      price: 29,
    },
  ],
});
