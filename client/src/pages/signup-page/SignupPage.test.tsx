import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { SignupPage } from './SignupPage';

describe('SignupPage', () => {
  it('renders correctly', () => {
    const { getByRole, getByLabelText } = render(
      <MemoryRouter>
        <SignupPage />
      </MemoryRouter>
    );

    expect(getByLabelText('Э-почта')).toBeInTheDocument();
    expect(getByLabelText('Пароль')).toBeInTheDocument();
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
      
      expect(getByRole('button').getAttribute('disabled')).toBe(null);
    });
  });

  describe('with valid input', () => {
    it.todo('not display error when value is valid');
  });

  describe('errors to email input', () => {
    it.todo('renders email validation errors');
  });
  describe('with invalid password', () => {
    describe('with invalid password', () => {
      it('renders password validation errors', async () => {
        const { getByRole, getByLabelText, getByText, container } = render(
          <MemoryRouter>
            <SignupPage />
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
});