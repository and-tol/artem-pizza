import { createAction } from '@reduxjs/toolkit';

// ActionTypes
import { pizzaActionsTypes } from './pizzaActionsTypes';

export const fillPizza = createAction(pizzaActionsTypes.PIZZA_FILL);
