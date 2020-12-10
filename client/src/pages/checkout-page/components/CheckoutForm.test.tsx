import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { CheckoutForm } from './CheckoutForm';

describe('CheckoutForm', () => {
  it('renders correctly', () => {
    const { getByLabelText, getByPlaceholderText, getByRole } = render(
      <MemoryRouter>
        <CheckoutForm />
      </MemoryRouter>
    );

    expect(getByPlaceholderText('Введите адрес')).toBeInTheDocument();
    expect(getByLabelText('подъезд')).toBeInTheDocument();
    expect(getByLabelText('этаж')).toBeInTheDocument();
    expect(getByLabelText('квартира')).toBeInTheDocument();

    expect(getByPlaceholderText('Номер карты')).toBeInTheDocument();
    expect(getByPlaceholderText('MM/YYYY')).toBeInTheDocument();
    expect(getByPlaceholderText('CVV')).toBeInTheDocument();
    expect(getByPlaceholderText('Имя как на карте')).toBeInTheDocument();

    expect(getByRole('button')).toBeInTheDocument();
  });

  describe('on card number change', () => {
    it('breaks the card number into groups of four digits', () => {
      const { getByPlaceholderText } = render(
        <MemoryRouter>
          <CheckoutForm />
        </MemoryRouter>
      );

      const inputCC: HTMLInputElement = getByPlaceholderText(
        'Номер карты'
      ) as HTMLInputElement;
      fireEvent.input(inputCC, {
        target: { value: '1234123412341234' },
      });

      expect(inputCC.value).toEqual('1234 1234 1234 1234');
    });
  });

  describe('with invalid input address', () => {
    it('renders the address validation error', async () => {
      const { getByRole, getByText } = render(
        <MemoryRouter>
          <CheckoutForm />
        </MemoryRouter>
      );

      await act(async () => {
        fireEvent.submit(getByRole('button'));
      });

      expect(getByText('Это обязательное поле')).toBeInTheDocument();
    });
  });
});
