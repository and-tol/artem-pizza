import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { store } from '../../init/store';
import { Provider } from 'react-redux';

import { PizzaConfiguratorPage } from './PizzaConfiguratorPage';

describe('PizzaConfiguratorPage', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <PizzaConfiguratorPage />
        </MemoryRouter>
      </Provider>
    );

    expect(getByText('Собери свою пиццу')).toBeInTheDocument();
  });

  describe('when was loaded data of ingredients', () => {
    // TODO: when was loaded data of ingredients
    it.todo('renders full form for configurate pizza');
    // TODO: renders when change size or dough
    it.todo('renders when change size or dough');
    it.skip("navigates to '/checkout' when click button", () => {
      const history = createMemoryHistory();

      const { getByRole } = render(
        <Provider store={store}>
          <Router history={history}>
            <PizzaConfiguratorPage />
          </Router>
        </Provider>
      );

      fireEvent.click(getByRole('button'));

      expect(history.location.pathname).toEqual('/checkout');
    });
  });
});
