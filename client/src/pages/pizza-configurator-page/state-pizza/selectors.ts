// Types
import { PizzaConfiguration, State } from '../../../types';

export const getPizza = (state: State): PizzaConfiguration => state.pizza.pizza;
