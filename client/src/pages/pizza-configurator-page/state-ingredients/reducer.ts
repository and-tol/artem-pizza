import { actionTypes } from './actionTypes';

// Types
import { IngredientsState, IngredientsAction } from '../../../types';

const initialState: IngredientsState = {
  ingredients: [
    {
      category: 'size',
      id: '0',
      image: '',
      name: '30',
      price: 200,
      slug: '30',
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
) => {
  switch (action.type) {
    case actionTypes.INGREDIENTS_START_FETCHING:
      return { ...state, isLoading: true };
    case actionTypes.INGREDIENTS_STOP_FETCHING:
      return { ...state, isLoading: false };
    case actionTypes.INGREDIENTS_SET_FETCHING_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
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
