import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ReceiptPage } from './ReceiptPage';

describe('ReceiptPage', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ReceiptPage />
      </MemoryRouter>
    );

    expect(getByText('Страница с чеком')).toBeInTheDocument();
  });
});
