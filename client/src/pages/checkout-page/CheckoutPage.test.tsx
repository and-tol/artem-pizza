import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CheckoutPage } from './CheckoutPage';

describe('CheckoutPage', () => {
  it('renders correctly', () => {
    
    render(
      <MemoryRouter>
        <CheckoutPage />
      </MemoryRouter>
    );

    expect(screen.getByText('Оформление заказа')).toBeInTheDocument();
  });
});
