import { createAction } from '@reduxjs/toolkit';

// ActionTypes
import { pizzaActionsTypes } from './pizzaActionsTypes';

export const startPizza = createAction(
  pizzaActionsTypes.PIZZA_START_CONFIGURATION
);

export const fillPizza = createAction(
  pizzaActionsTypes.PIZZA_FILL
);
