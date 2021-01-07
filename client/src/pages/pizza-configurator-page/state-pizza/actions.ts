// Types
import { PizzaConfiguration } from '../../../types';

// ActionTypes
import { actionTypes } from './actionTypes';

export const pizzaConfiguratorActions = Object.freeze({
  startPizza: () => {
    return {
      type: actionTypes.PIZZA_CONFIGURATOR_START_CONFIGURATION,
    };
  },
  fillPizza: (payload: PizzaConfiguration) => {
    return {
      type: actionTypes.PIZZA_CONFIGURATOR_FILL,
      payload,
    };
  },
});
