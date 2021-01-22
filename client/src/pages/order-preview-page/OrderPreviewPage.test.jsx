import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { OrderPreviewPage } from './OrderPreviewPage';
import { createMemoryHistory } from 'history';


import { store } from '../../init/store';
import { Provider } from 'react-redux';

jest.mock('../../share/components/OrderPreview', () => ({
  OrderPreview: ({ pizza }) => {
    return <div>{pizza.sauce}</div>;
  },
}));

describe('OrderPreviewPage', () => {
  it('renders correctly if pizza not undefined', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <OrderPreviewPage />
        </MemoryRouter>
      </Provider>
    );

    expect(getByText('Ленивая Маргарита')).toBeInTheDocument();
  });

  it("if pizza=undefined redirect  to '/'", () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <Router history={history}>
          <OrderPreviewPage />
        </Router>
      </Provider>
    );

    expect(history.location.pathname).toEqual('/');
  });
});
