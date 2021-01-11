import { actionTypes } from './actionTypes';
import { mockIngredient } from './../../../__mock__/ingredient';
import { ingredientsActions } from './actions';

const mockIngredients = [mockIngredient];

describe('actions', () => {
  it('create an action that fills data of ingredients to store', () => {
    const expectedAction = {
      type: actionTypes.INGREDIENTS_FILL,
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
      const expectedAction = [
        { type: actionTypes.INGREDIENTS_START_FETCHING },
        { type: actionTypes.INGREDIENTS_FILL, ingredients: [mockIngredient] },
        { type: actionTypes.INGREDIENTS_STOP_FETCHING },
      ];

      await ingredientsActions.fetchIngredientsAsync()(dispatch);

      expect(dispatch).toBeCalledWith(expectedAction);

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: actionTypes.INGREDIENTS_FETCH_ASYNC,
        ingredints: mockIngredients,
      });
    });
  });
});
