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

    // const size = screen.findByText('30')

    // console.log('screen', size);

    expect(screen.getByText('30')).toBeInTheDocument();
  });
});
