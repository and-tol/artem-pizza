import { actionTypes } from './actionTypes';
// Types
import { PizzaState, PizzaAction } from '../../../types';
// Data
import { DEFAULT_PIZZA } from '../../../pizzaData';

const initialState: PizzaState = {
  pizza: DEFAULT_PIZZA,
};

export const pizzaConfiguratorReducer = (
  state: PizzaState = initialState,
  action: PizzaAction
) => {
  switch (action.type) {
    case actionTypes.PIZZA_CONFIGURATOR_FILL:
      return {
        ...state,
        pizza: action.payload,
      };

    default:
      return state;
  }
};
