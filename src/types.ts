export type PizzaOptions = { value: string; name: string; price?: number };
export type PizzaIngredients = {
  value: string;
  name: string;
  url: string;
  price: number;
};

export interface PizzaData {
  pizzaSize: PizzaOptions[];
  pizzaDough: PizzaOptions[];
  pizzaSauce: PizzaOptions[];
  pizzaCheese: PizzaIngredients[];
  pizzaVegetables: PizzaIngredients[];
  pizzaMeat: PizzaIngredients[];
}
