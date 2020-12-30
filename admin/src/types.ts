export type Ingredient = {
  id?: string;
  name: string;
  slug: string;
  price: any;
  category: string;
  image: any;
};

export type ShowIngredient = {
  [key: string]: string;
};

export type QueryResponse = {
  [ingredientId: string]: string;
};

// ----------- //
export type NameAndPrice = { name: string; price: number };
export type Name = { name: string };
export type NameAndCase = { name: string; case: string };

export interface IngredientNameAndPriceState {
  [item: string]: NameAndPrice;
}
export interface IngredientNameState {
  [item: string]: Name;
}
export interface IngredientNameAndCaseState {
  [item: string]: NameAndCase;
}
export interface PizzaConfiguration {
  size: string;
  dough: string;
  sauce: string;
  cheese: string[];
  vegetables: string[];
  meat: string[];
}

export interface TotalPrice {
  size: string;
  dough?: string;
  sauce?: string;
  cheese: string[];
  vegetables: string[];
  meat: string[];
}

export type RefInputType =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

export type RefBtnType =
  | string
  | ((instance: HTMLButtonElement | null) => void)
  | React.RefObject<HTMLButtonElement>
  | null
  | undefined;
