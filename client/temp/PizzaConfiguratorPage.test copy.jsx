import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Router } from 'react-router-dom';
import { store } from '../src/init/store';
import { PizzaConfiguratorPage } from '../src/pages/PizzaConfiguratorPage/PizzaConfiguratorPage';



const pizza = {
  size: 'test1',
  dough: 'test2',
  sauce: 'test3',
  cheese: ['test4'],
  vegetables: ['test5'],
  meat: ['test6'],
};

jest.mock('./components/PizzaForm) => {
    if (onPizzaCreated) {
      return <button onClick={() => onPizzaCreated(pizza)}>Сохранить</button>;
    }
  },
}));

jest.mock('../../share/components/OrderPreview', () => ({
  OrderPreview: ({ pizza, ingredients }) => {
    return <div>Mocked Order Preview</div>;
  },
}));

describe('PizzaConfiguratorPage', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <PizzaConfiguratorPage />
        </MemoryRouter>
      </Provider>
    );

    expect(getByText('Страница кофигуратора пиццы')).toBeInTheDocument();
  });

  describe('.onPizzaChange', () => {
    it("navigates to '/order-preview'", () => {
      const history = createMemoryHistory();

      const { getByRole } = render(
        <Provider store={store}>
          <Router history={history}>
            <PizzaConfiguratorPage />
          </Router>
        </Provider>
      );

      fireEvent.click(getByRole('button'));

      expect(history.location.pathname).toEqual('/order-preview');
    });
  });
});
