import { actionTypes } from './actionTypes';
import { ingredientsReducer } from './reducer';
import { mockIngredient } from '../../../__mock__/ingredient';

const initialState = {
  ingredients: [mockIngredient],
  error: null,
  isLoading: false,
};

describe('ingredientsReducer', () => {
  it('is fill data of ingredients into state', () => {
    const mockIngredients = [mockIngredient];

    const action = {
      type: actionTypes.INGREDIENTS_FILL,
      payload: mockIngredients,
      error: null,
    };

    expect(ingredientsReducer(initialState, action)).toEqual({
      ingredients: [
        {
          id: 'test_id',
          name: 'test_name',
          slug: 'test_slug',
          price: 200,
          category: 'test_category',
          image: 'test_image',
          thumbnail: 'test_thumbnail',
        },
      ],
      error: null,
      isLoading: false,
    });
  });
});
