import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { MemoryRouter, Router } from 'react-router-dom';
import { store } from '../../init/store';
import { SignupPage } from './SignupPage';

describe('SignupPage', () => {
  it('renders correctly', () => {
    const { getByRole, getByLabelText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <SignupPage />
        </MemoryRouter>
      </Provider>
    );

    expect(getByLabelText('Э-почта')).toBeInTheDocument();
    expect(getByLabelText('Придумайте пароль')).toBeInTheDocument();
    expect(getByRole('button')).toBeInTheDocument();
  });

  describe('unlocks the button when passwords match', () => {
    it.skip('does input value to email and password', () => {
      const { getByLabelText, getByText } = render(
        <Provider store={store}>
          <MemoryRouter>
            <SignupPage />
          </MemoryRouter>
        </Provider>
      );

      fireEvent.input(getByLabelText('Э-почта'), {
        target: { value: 'test@mail.com' },
      });
      fireEvent.input(getByLabelText(/Придумайте/i), {
        target: { value: '123456' },
      });
      fireEvent.input(getByLabelText(/Повторите/i), {
        target: { value: '123456' },
      });

      expect(getByText('Зарегистрироваться')).toBeInTheDocument();
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
      it.skip('renders password validation errors', async () => {
        const { getByRole, getByLabelText, getByText } = render(
          <Provider store={store}>
            <MemoryRouter>
              <SignupPage />
            </MemoryRouter>
          </Provider>
        );

        fireEvent.input(getByLabelText('Э-почта'), {
          target: { value: 'test@mail.com' },
        });
        fireEvent.input(getByLabelText(/Придумайте/i), {
          target: { value: '123' },
        });
        fireEvent.input(getByLabelText(/Повторите/i), {
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
