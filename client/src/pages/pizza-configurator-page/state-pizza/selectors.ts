import { RootState } from '../../../init/rootReducer';
// Types
import { PizzaConfiguration  } from '../../../types';

export const getPizza = (state: RootState): PizzaConfiguration =>
  state.pizza.pizza;
