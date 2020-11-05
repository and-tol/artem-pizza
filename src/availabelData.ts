type PizzaSize = { size: string; name: string };

interface AvailabelData {
  pizzaSize: PizzaSize[];
}

export const availabelData: AvailabelData = Object.freeze({
  pizzaSize: [
    { size: '30', name: 'size30' },
    { size: '35', name: 'size35' },
  ],
});
