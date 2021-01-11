import { actionTypes } from '../state-pizza/actionTypes';
import { pizzaConfiguratorReducer } from './reducer';

const initialState = {
  pizza: {
    size: '30',
    dough: 'thin',
    sauce: 'tomato-sauce',
    cheese: [],
    vegetables: [],
    meat: [],
  },
};

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
      type: actionTypes.PIZZA_CONFIGURATOR_FILL,
      payload: mockPizza,
      error: null,
    };

    expect(pizzaConfiguratorReducer(initialState, action)).toEqual({
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
