import { ingredientsActionTypes } from './ingredientsActionTypes';
import { mockIngredient } from '../../../testUtils/mockIngredient';
import { ingredientsActions } from './ingredientsActions';

const mockIngredients = [mockIngredient];

describe('actions', () => {
  it('create an action that fills data of ingredients to store', () => {
    const expectedAction = {
      type: ingredientsActionTypes.INGREDIENTS_FILL,
      payload: mockIngredients,
    };

    expect(ingredientsActions.fillIngredients(mockIngredients)).toEqual(
      expectedAction
    );
  });
});

describe('thunk actions', () => {
  describe('.fetchIngredientsAsync', () => {
    it.skip('fetch ingredints and dispatches INGREDIENTS_FETCH_ASYNC action with its data', async () => {
      jest.mock('../../../api', () => {
        return {
          api: {
            ingredients: {
              availableIngredients: () => {
                return [mockIngredient];
              },
            },
          },
        };
      });

      const dispatch = jest.fn();

      await ingredientsActions.fetchIngredientsAsync()(dispatch);

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ingredientsActionTypes.INGREDIENTS_FETCH_ASYNC,
        ingredints: mockIngredients,
      });
    });
  });
});
