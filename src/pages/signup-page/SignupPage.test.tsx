import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Router } from 'react-router-dom';
import { SignupPage } from './SignupPage';

describe('SignupPage', () => {
  it('renders correctly', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <SignupPage />
      </MemoryRouter>
    );

    expect(getByRole('button')).toBeInTheDocument();
  });
  it('navigation to "/login"', () => {
    const history = createMemoryHistory();
    const { getByRole } = render(
      <Router history={history}>
        <SignupPage />
      </Router>
    );

    fireEvent.click(getByRole('link'));

    expect(history.location.pathname).toEqual('/login');
  });
});
