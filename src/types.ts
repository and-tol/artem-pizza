export type PizzaSize = { value: string; name: string; price: number };
export type PizzaOptions = { value: string; name: string; price?: number };
export type PizzaIngredients = {
  value: string;
  name: string;
  url: string;
  price: number;
};

export interface PizzaData {
  pizzaSize: PizzaSize[];
  pizzaDough: PizzaOptions[];
  pizzaSauce: PizzaOptions[];
  pizzaCheese: PizzaIngredients[];
  pizzaVegetables: PizzaIngredients[];
  pizzaMeat: PizzaIngredients[];
}

// export type PizzaIngredientsOrder = { [value: string]: boolean };

export interface PizzaOrder {
  pizzaName: string;
  size: string;
  dough: string;
  sauce: string;
  // cheese: PizzaIngredientsOrder[];
  cheese: string[];
  vegetables: string[];
  meat: string[];
  // price: number;
}
