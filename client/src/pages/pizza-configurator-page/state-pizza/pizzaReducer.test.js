import { pizzaActionTypes } from './pizzaActionsTypes';
import { pizzaReducer } from './pizzaReducer';

import { mockDefaultPizza as mockInitialState } from '../../../testUtils/mockDefaultPizza';

describe('pizzaReducer', () => {
  it.todo("fill data of pizza's configuration into state", () => {
    const mockPizza = {
      size: 'test_size',
      dough: 'test_dough',
      sauce: 'test_sauce',
      cheese: ['test_cheese_1'],
      vegetables: ['test_vegetables_1'],
      meat: ['test_meat_1'],
    };

    const action = {
      type: pizzaActionTypes.PIZZA_FILL,
      payload: mockPizza,
      error: null,
    };

    expect(pizzaReducer(mockInitialState, action)).toEqual({
      pizza: {
        size: 'test_size',
        dough: 'test_dough',
        sauce: 'test_sauce',
        cheese: ['test_cheese_1'],
        vegetables: ['test_vegetables_1'],
        meat: ['test_meat_1'],
      },
    });
  });
});
