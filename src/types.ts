import * as H from 'history';

export type NameAndPrice = { name: string; price: number };
export type Name = { name: string };

export interface IngredientNameAndPriceState {
  [item: string]: NameAndPrice;
}
export interface IngredientNameState {
  [item: string]: Name;
}
export interface PizzaConfiguration {
  size: string;
  dough: string;
  sauce: string;
  cheese: string[];
  vegetables: string[];
  meat: string[];
}

export type Page = {
  url:
    | string
    | H.LocationDescriptorObject<unknown>
    | ((location: H.Location<unknown>) => H.LocationDescriptor<unknown>);
  // page?: <T>({}: T) => JSX.Element;
};

export interface Book {
  [item: string]: Page;
}

