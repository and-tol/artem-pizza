import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { PizzaConfiguratorPage } from './PizzaConfiguratorPage';
// Types
import {PizzaFormProps} from './PizzaForm'


jest.mock('./PizzaForm', () => ({
  PizzaForm: ({ onPizzaCreated }: PizzaFormProps) => {
    if (onPizzaCreated) {
      return (
        <button
          onClick={() =>
            onPizzaCreated({
              size: 'test1',
              dough: 'test2',
              sauce: 'test3',
              cheese: ['test4'],
              vegetables: ['test5'],
              meat: ['test6'],
            })
          }
        >
          Сохранить
        </button>
      );
    }
  },
}));

describe('PizzaConfiguratorPage', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <PizzaConfiguratorPage _usePizzaHook={() => ({ setPizza: () => {} })} />
      </MemoryRouter>
    );

    expect(getByText('Страница кофигуратора пиццы')).toBeInTheDocument();
  });

  describe('.onPizzaChange', () => {
    const mockSetPizza = jest.fn();

    it('sets pizza value in the pizza context', () => {
      const { getByRole } = render(
        <MemoryRouter>
          <PizzaConfiguratorPage
            _usePizzaHook={() => ({ setPizza: mockSetPizza })}
          />
        </MemoryRouter>
      );

      fireEvent.click(getByRole('button'));

      expect(mockSetPizza).toBeCalledWith({
        size: 'test1',
        dough: 'test2',
        sauce: 'test3',
        cheese: ['test4'],
        vegetables: ['test5'],
        meat: ['test6'],
      });
    });
    it("navigates to '/order-preview'", () => {
      const history = createMemoryHistory();

      const { getByRole } = render(
        <Router history={history}>
          <PizzaConfiguratorPage
            _usePizzaHook={() => ({ setPizza: () => {} })}
          />
        </Router>
      );

      fireEvent.click(getByRole('button'));

      expect(history.location.pathname).toEqual('/order-preview');
    });
  });
});
