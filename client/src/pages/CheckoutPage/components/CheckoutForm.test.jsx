import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { CheckoutForm } from './CheckoutForm';
import { store } from '../../../init/store';

import { mockDefaultPizza } from '../../../testUtils';

describe('CheckoutForm', () => {
  it('renders correctly', () => {
    const { getByLabelText, getByPlaceholderText, getByRole, getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CheckoutForm pizza={mockDefaultPizza} ingredients={[]} />
        </MemoryRouter>
      </Provider>
    );

    expect(getByPlaceholderText('Введите адрес')).toBeInTheDocument();
    expect(getByLabelText('подъезд')).toBeInTheDocument();
    expect(getByLabelText('этаж')).toBeInTheDocument();
    expect(getByLabelText('квартира')).toBeInTheDocument();

    expect(getByText('Данные для оплаты')).toBeInTheDocument();
    expect(getByPlaceholderText('Номер карты')).toBeInTheDocument();
    expect(getByPlaceholderText('MM/YYYY')).toBeInTheDocument();
    expect(getByPlaceholderText('CVV')).toBeInTheDocument();
    expect(getByPlaceholderText('Имя как на карте')).toBeInTheDocument();

    expect(getByText(/Доставим пиццу/i)).toBeInTheDocument();

    expect(getByRole('button')).toBeInTheDocument();
  });

  describe('on card number change', () => {
    it('breaks the card number into groups of four digits', () => {
      const { getByPlaceholderText } = render(
        <Provider store={store}>
          <MemoryRouter>
            <CheckoutForm pizza={mockDefaultPizza} ingredients={[]} />
          </MemoryRouter>
        </Provider>
      );

      const inputCC = getByPlaceholderText('Номер карты');
      fireEvent.input(inputCC, {
        target: { value: '1234123412341234' },
      });

      expect(inputCC.value).toEqual('1234 1234 1234 1234');
    });
  });

  describe('on CVV change', () => {
    it.todo('leaves only three digits');
  })

  describe('with invalid input address', () => {
    it('renders the address validation error', async () => {
      const { getByRole, queryAllByText } = render(
        <Provider store={store}>
          <MemoryRouter>
            <CheckoutForm pizza={mockDefaultPizza} ingredients={[]} />
          </MemoryRouter>
        </Provider>
      );

      await act(async () => {
        fireEvent.submit(getByRole('button'));
      });

      const div = queryAllByText(/Это обязательное поле/i);

      expect(div[0]).toBeInTheDocument();
      expect(div[1]).toBeInTheDocument();
      // expect(div[2]).toBeInTheDocument();
    });
  });
});
