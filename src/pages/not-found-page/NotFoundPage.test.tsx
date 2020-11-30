import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage';

describe('NotFoundPage', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    expect(getByText(/Page Not Found/i)).toBeInTheDocument();
  });
});
