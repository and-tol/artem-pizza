import { PizzaConfiguration } from '../../../types';

export const actionTypes = Object.freeze({
  PIZZA_CONFIGURATOR_START_CONFIGURATION:
    'PIZZA_CONFIGURATOR_START_CONFIGURATION',
  PIZZA_CONFIGURATOR_FILL: 'PIZZA_CONFIGURATOR_FILL',
});

export interface StartPizzaAction {
  type: typeof actionTypes.PIZZA_CONFIGURATOR_START_CONFIGURATION;
}

export interface FillPizzaAction {
  type: typeof actionTypes.PIZZA_CONFIGURATOR_FILL;
  payload: PizzaConfiguration;
}
