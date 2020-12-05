import React from 'react';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { LoginPage } from './LoginPage';
import { act } from '@testing-library/react-hooks';

// const mockLogin = jest.fn((email, password) => {
//   return Promise.resolve({ email, password });
// });

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

  describe('disabled button becomes anabled', () => {
    it('does input value to email and password', async () => {

      const { getByLabelText, getByRole } = render(
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      );

      fireEvent.change(getByLabelText('Э-почта'), {
        target: { value: 'test@mail.com' },
      });
      fireEvent.change(getByLabelText('Пароль'), {
        target: { value: '123456' },
      });

      await (await waitFor(() => expect(getByRole("button")).not.toBeDisabled()));
    })
  });

  describe('with valid input', () => {
    it.todo('not display error when value is valid');
  });

  describe('errors to email input', () => {
    it.todo('renders email validation errors');
    it.todo('renders email required errors');
  });
  describe('with invalid password', () => {
    it.todo('renders password validation errors');
    it.todo('renders password required errors');
  });
});
