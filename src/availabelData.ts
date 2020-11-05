type PizzaSize = { size: string; name: string };
type PizzaDough = { dough: string; name: string };
type PizzaSauce = { sauce: string };

interface AvailabelData {
  pizzaSize: PizzaSize[];
  pizzaDough: PizzaDough[];
  pizzaSauce: PizzaSauce[];
}

export const availabelData: AvailabelData = Object.freeze({
  pizzaSize: [
    { size: '30', name: 'size30' },
    { size: '35', name: 'size35' },
  ],
  pizzaDough: [
    { dough: 'Тонкое', name: 'thinDough' },
    { dough: 'Пышное', name: 'puffyDough' },
  ],
  pizzaSauce: [{ sauce: 'Томатный' }, { sauce: 'Белый' }, { sauce: 'Острый' }],
});
