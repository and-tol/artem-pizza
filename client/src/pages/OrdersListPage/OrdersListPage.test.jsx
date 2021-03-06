import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { OrdersListPage } from './OrdersListPage';

import { store } from '../../init/store';
import { Provider } from 'react-redux';

describe('OrdersListPage', () => {
  // FIXME
  it.skip('shows Loader when data is loading', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <OrdersListPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('orders')).toBeInTheDocument();
  });

  it.todo("renders when data was loaded")

});
