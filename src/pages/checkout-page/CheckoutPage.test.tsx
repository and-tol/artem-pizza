import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CheckoutPage } from './CheckoutPage';

describe('CheckoutPage', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <CheckoutPage />
      </MemoryRouter>
    )

    expect(getByText(/оформления заказа/i)).toBeInTheDocument()
  });
});
