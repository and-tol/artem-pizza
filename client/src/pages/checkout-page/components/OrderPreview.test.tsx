import { render, screen } from '@testing-library/react';
import React from 'react';
import { CheckoutPreview } from './OrderPreview';

describe('CheckoutPreview', () => {
  it('renders correctly', async () => {
    render(
      <CheckoutPreview
        pizza={{
          cheese: ['mozarella'],
          dough: 'thin',
          meat: ['bacon'],
          sauce: 'tomato',
          size: '30',
          vegetables: ['tomato'],
        }}
      ></CheckoutPreview>
    );

    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText(/тонком/i)).toBeInTheDocument();
    expect(await screen.findByText(/Томатный/i)).toBeInTheDocument()
    expect(await screen.findByText(/Моцарелла/i)).toBeInTheDocument();
    expect(await screen.findByText(/Помидор/i)).toBeInTheDocument();
    expect(await screen.findByText(/Бекон/i)).toBeInTheDocument();
  });
});
