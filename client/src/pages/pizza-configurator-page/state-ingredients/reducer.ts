// Action Types
import { actionTypes } from './actionTypes';

// Types
import { IngredientsState, IngredientsAction } from '../../../types';

const initialState: IngredientsState = {
  ingredients: [
    {
      id: '0',
      name: '30',
      slug: '30',
      price: 200,
      category: 'size',
      image: '',
      thumbnail: '',
    },
    {
      category: 'dough',
      id: '1',
      image: '',
      name: 'Тонкое',
      price: 0,
      slug: 'thin',
      thumbnail: '',
    },
    {
      category: 'sauce',
      id: '2',
      image: '',
      name: 'Томатный',
      price: 0,
      slug: 'tomato-sauce',
      thumbnail: '',
    },
  ],
  error: null,
  isLoading: false,
};

export const ingredientsReducer = (
  state = initialState,
  action: IngredientsAction
): IngredientsState => {
  switch (action.type) {
    case actionTypes.INGREDIENTS_START_FETCHING:
      return { ...state, isLoading: true };
    case actionTypes.INGREDIENTS_STOP_FETCHING:
      return { ...state, isLoading: false };
    case actionTypes.INGREDIENTS_SET_FETCHING_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case actionTypes.INGREDIENTS_FILL:
      return {
        ...state,
        ingredients: action.payload,
        error: null,
        isLoading: false,
      };

    default:
      return state;
  }
};
