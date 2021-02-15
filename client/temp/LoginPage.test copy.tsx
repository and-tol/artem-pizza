import React, { SyntheticEvent, BaseSyntheticEvent } from 'react';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { LoginPage } from '../src/pages/login-page/LoginPage';
// import { act } from 'react-dom/test-utils';
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

  describe('with valid input', () => {
    it('not display error when value is valid', async () => {
      const mockLogin = jest.fn((email, password) => {
        return Promise.resolve({ email, password });
      });

      const { getByLabelText, getByRole } = render(
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      );

      await waitFor(() => expect(getByRole('button')).toBeDisabled());

      // await act(async () => {
      //   fireEvent.change(getByLabelText('Э-почта'), {
      //     target: { value: 'email@test.com' },
      //   });
      //   fireEvent.change(getByLabelText('Пароль'), {
      //     target: { value: '123456' },
      //   });
      // });
      // await act(async () => {
      // fireEvent.submit(getByRole('button'));
      // });

      // await waitFor(() => expect(getByRole('button')).not.toBeDisabled());
    });
  });

  describe('with invalid email', () => {
    it('renders email validation errors', async () => {
      const { getByLabelText, container } = render(
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      );

      await act(async () => {
        const emailInput = getByLabelText('Э-почта');
        fireEvent.change(emailInput, { target: { value: 'invalid email' } });
        fireEvent.blur(emailInput);
      });

      expect(container.innerHTML).toMatch('Неправильная э-почта');
    });

  });
  describe('with invalid password', () => {
    it('renders password validation errors', async () => {
      const { getByLabelText, container } = render(
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      );

      await act(async () => {
        const passwordInput = getByLabelText('Пароль');
        fireEvent.change(passwordInput, {
          target: { value: 'invalid password' },
        });
      });

      expect(container.innerHTML).toMatch('Неправильный пароль');
    });
  });
});
