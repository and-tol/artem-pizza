import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { LoginPage } from './LoginPage';

describe('LoginPage', () => {
  it('renders correctly', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    expect(getByRole('button')).toBeInTheDocument();
  });
  it('navigation to "/signup"', () => {
    const history = createMemoryHistory();

    const { getByRole } = render(
      <Router history={history}>
        <LoginPage />
      </Router>
    );

    fireEvent.click(getByRole('link'));

    expect(history.location.pathname).toEqual('/signup');
  });
});
