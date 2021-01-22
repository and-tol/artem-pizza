import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { OrdersListPage } from './OrdersListPage';

import { store } from '../../init/store';
import { Provider } from 'react-redux';

describe('OrdersListPage', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <OrdersListPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('orders')).toBeInTheDocument();
  });

  // TODO: тест -> когда данные загружены,
  // TODO: тест -> процесс загрузки,
});
