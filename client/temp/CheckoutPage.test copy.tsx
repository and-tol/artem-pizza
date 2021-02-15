import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { CheckoutPage } from '../src/pages/checkout-page/CheckoutPage';

describe('CheckoutPage', () => {
  it('renders correctly', () => {
    const { getByLabelText, getByPlaceholderText, getByRole } = render(
      <MemoryRouter>
        <CheckoutPage />
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

  describe('on submit', () => {
  
  });
});
