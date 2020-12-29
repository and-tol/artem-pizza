// Action Types
import { actionTypes } from './actionTypes';
// Api
import { api } from '../../../api';
// Types
import { IngredientsState, ErrorState } from '../../../types';

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
  setFetchingError: (error: ErrorState) => {
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

  // Async
  fetchIngredientsAsync: () => async (dispatch: any) => {
    dispatch(ingredientsActions.startFetching());

    const response = await api.ingredients.availableIngredients();

    if (response.status === 200) {
      const results = await response.json();
      dispatch(ingredientsActions.fillIngredients(results));
    } else {
      const error = {
        status: response.status,
      };
      dispatch(ingredientsActions.setFetchingError(error));
    }
  },
});
