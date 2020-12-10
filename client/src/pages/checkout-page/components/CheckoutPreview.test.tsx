import React from 'react';
import { render, screen} from '@testing-library/react';
import { CheckoutPreview } from './CheckoutPreview';

describe('CheckoutPreview', () => {
  it('renders correctly', () => {
    render(
      <CheckoutPreview
        pizza=
        {{
          cheese: ['mozarella'],
          dough: 'thin',
          meat: ['bacon'],
          sauce: 'tomato',
          size: '30',
          vegetables: ['tomato'],
        }}>
      </CheckoutPreview>
    );

    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText('тонком')).toBeInTheDocument();
    expect(screen.getByText('Томатный')).toBeInTheDocument();
    expect(screen.getByText('Моцарелла')).toBeInTheDocument();
    expect(screen.getByText('Помидор')).toBeInTheDocument();
    expect(screen.getByText('Бекон')).toBeInTheDocument();
  });
});
