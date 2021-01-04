import { render, screen } from '@testing-library/react';
import React from 'react';
import { Order } from './Order';

describe('Order', () => {
  it("renders correctly", () => {
    render(<Order />)

    expect(screen.getByText('Заказ')).toBeInTheDocument();
  })
});