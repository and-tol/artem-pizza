import { render, screen } from '@testing-library/react';
import React from 'react';
import { PreviousOrder } from './PreviousOrder'

describe('PreviousOrder', () => {
  it("renders correctly", () => {
    render(<PreviousOrder />)

    expect(screen.getByText('Заказ')).toBeInTheDocument();
  })
});