import { actionTypes } from './actionTypes';
// Types
import { PizzaState, PizzaAction } from '../../../types';

const initialState: PizzaState = {
  pizza: {
    size: '30',
    dough: 'thin',
    sauce: 'tomato-sauce',
    cheese: [],
    vegetables: [],
    meat: [],
  },
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
