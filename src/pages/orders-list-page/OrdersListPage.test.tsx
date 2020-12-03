import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { OrdersListPage } from './OrdersListPage';

describe('OrdersListPage', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <OrdersListPage />
      </MemoryRouter>
    );

    expect(getByText(/со списком заказов/i)).toBeInTheDocument()
  });
});
