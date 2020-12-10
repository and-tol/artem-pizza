import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Router } from 'react-router-dom';
import { LoginPage } from './LoginPage';

describe('LoginPage', () => {
  it('renders correctly', () => {
    const { getByRole, getByLabelText } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    expect(getByLabelText('Э-почта')).toBeInTheDocument();
    expect(getByLabelText('Пароль')).toBeInTheDocument();
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

  describe('disabled button becomes enabled', () => {
    it('enables submitting when email and password were provided', () => {
      const { getByLabelText, getByRole } = render(
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      );

      fireEvent.input(getByLabelText('Э-почта'), {
        target: { value: 'test@mail.com' },
      });
      fireEvent.input(getByLabelText('Пароль'), {
        target: { value: '123456' },
      });

      expect(getByRole('button').getAttribute('disabled')).toBe(null);
    });
  });

  describe('with valid input', () => {
    it.todo('not display error when value is valid');
  });

  describe('with invalid email input', () => {
    it.todo('renders the email validation errors');
  });

  describe('with invalid password', () => {
    it('renders password validation errors', async () => {
      const { getByRole, getByLabelText, getByText, container } = render(
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      );

      fireEvent.input(getByLabelText('Э-почта'), {
        target: { value: 'test@mail.com' },
      });
      fireEvent.input(getByLabelText('Пароль'), {
        target: { value: '123' },
      });

      await act(async () => {
        fireEvent.submit(getByRole('button'));
      });

      expect(
        getByText('Длина пароля должна быть не менее шести символов')
      ).toBeInTheDocument();
    });
  });
});
