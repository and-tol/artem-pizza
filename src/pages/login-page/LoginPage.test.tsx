import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginPage } from './LoginPage';
import { MemoryRouter } from 'react-router-dom';

describe('LoginPage', () => {
  it('renders correctly', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    expect(getByRole('button')).toBeInTheDocument();
  });
});
