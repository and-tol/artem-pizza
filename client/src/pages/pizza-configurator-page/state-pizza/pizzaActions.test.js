import { pizzaActionsTypes } from './pizzaActionsTypes';
import { pizzaConfiguratorActions } from './pizzaActions';

describe('actions', () => {
  it('create startPizza action that fills data of pizza with default ingredients', () => {
    const expectedAction = {
      type: pizzaActionsTypes.PIZZA_START_CONFIGURATION,
    };

    expect(pizzaConfiguratorActions.startPizza()).toEqual(expectedAction);
  });
  it('create fillPizza action that fills data of pizza with selected ingredients', () => {
    const mockPizza = {
      size: 'test_size_1',
      dough: 'test_dough_1',
      sauce: 'test_sauce_1',
      cheese: ['test_cheese_1'],
      vegetables: ['test_vegetables_1'],
      meat: ['test_meat_1'],
    };

    const expectedAction = {
      type: pizzaActionsTypes.PIZZA_CONFIGURATOR_FILL,
      payload: mockPizza,
      error: 'test_error',
    };

    expect(pizzaConfiguratorActions.fillPizza(mockPizza)).toEqual(
      expectedAction
    );
  });
});
