// Action Types
import { actionTypes } from './actionTypes';
// Types
import {IngredientsState} from '../../../types'

export const ingredientsActions = Object.freeze({
  startFetching: () => {
    return {
      type: actionTypes.INGREDIENTS_START_FETCHING,
    };
  },
  stopFetching: () => {
    return {
      type: actionTypes.INGREDIENTS_STOP_FETCHING,
    };
  },
  setFetchingError: (error: Error) => {
    return {
      type: actionTypes.INGREDIENTS_SET_FETCHING_ERROR,
      payload: error,
    };
  },

  fillIngredients: (payload: IngredientsState) => {
    return {
      type: actionTypes.INGREDIENTS_FILL,
      payload,
    };
  },
});
