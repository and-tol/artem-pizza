import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
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

  describe('disabled button becomes abled', () => {
    it('does input value to email and password', () => {
      const { getByLabelText, getByRole } = render(
        <MemoryRouter>
          <SignupPage />
        </MemoryRouter>
      );

      fireEvent.input(getByLabelText('Э-почта'), {
        target: { value: 'test@mail.com' },
      });
      fireEvent.input(getByLabelText('Пароль'), {
        target: { value: '123456' },
      });
      // TODO: ? почему тест не проходит с методом change
      expect(getByRole('button').getAttribute('disabled')).toBe(null);
    });
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
