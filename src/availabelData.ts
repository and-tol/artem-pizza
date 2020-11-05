// type PizzaSize = { size: string; name: string };
// type PizzaDough = { dough: string; name: string };
// type PizzaSauce = { sauce: string,name:'string' };
// type PizzaCheese = { cheese: string,name:'string' };
// type PizzaVegetables= { vegetable: string,name:'string' };
// type PizzaMeat = { meat: string, name: 'string' };

type PizzaParamsRadio = { value: string; name: string };
type PizzaParamsCheckbox = {
  value: string;
  name: string;
  url: string;
  price: number;
};

interface AvailabelData {
  pizzaSize: PizzaParamsRadio[];
  pizzaDough: PizzaParamsRadio[];
  pizzaSauce: PizzaParamsRadio[];
  pizzaCheese: PizzaParamsCheckbox[];
  pizzaVegetables: PizzaParamsCheckbox[];
  pizzaMeat: PizzaParamsCheckbox[];
}

export const availabelData: AvailabelData = Object.freeze({
         pizzaSize: [
           { value: '30', name: 'size30' },
           { value: '35', name: 'size35' },
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
             name: 'Cheese',
             url: '/img/mozarella.png',
             price: 29,
           },
           {
             value: 'Чеддер',
             name: 'Cheese',
             url: '/img/cheddar.png',
             price: 29,
           },
           {
             value: 'Дор Блю',
             name: 'Cheese',
             url: '/img/dor-blue.png',
             price: 29,
           },
         ],
         pizzaVegetables: [
           {
             value: 'Помидор',
             name: 'tomatoVegetable',
             url: '/img/tomato.png',
             price: 29,
           },
           {
             value: 'Грибы',
             name: 'mushroomsVegetable',
             url: '/img/mushrooms.png',
             price: 29,
           },
           {
             value: 'Перец',
             name: 'pepperVegetable',
             url: '/img/pepper.png',
             price: 29,
           },
           {
             value: 'Ананасы',
             name: 'pineappleVegetable',
             url: '/img/pineapple.png',
             price: 29,
           },
           {
             value: 'Оливки',
             name: 'olivesVegetable',
             url: '/img/olives.png',
             price: 29,
           },
           {
             value: 'Лук',
             name: 'onionVegetable',
             url: '/img/onion.png',
             price: 29,
           },
           {
             value: 'Брокколи',
             name: 'broccoliVegetable',
             url: '/img/broccoli.png',
             price: 29,
           },
         ],
         pizzaMeat: [
           {
             value: 'Бекон',
             name: 'baconMeat',
             url: '/img/bacon.png',
             price: 29,
           },
           {
             value: 'Пепперони',
             name: 'pepperoniMeat',
             url: '/img/pepperoni.png',
             price: 29,
           },
           {
             value: 'Ветчина',
             name: 'hamMeat',
             url: '/img/ham.png',
             price: 29,
           },
         ],
       });
