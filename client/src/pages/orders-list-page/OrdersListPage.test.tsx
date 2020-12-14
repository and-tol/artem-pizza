import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { OrdersListPage } from './OrdersListPage';

describe('OrdersListPage', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <OrdersListPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Заказы/i)).toBeInTheDocument();
  });
});
