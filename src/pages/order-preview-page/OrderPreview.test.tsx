import { render, screen } from '@testing-library/react';
import React from 'react';
import { OrderPreview } from './OrderPreview';

describe('OrderPreview', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <OrderPreview
        pizza={{
          cheese: ['mozarella'],
          dough: 'thin',
          meat: ['bacon'],
          sauce: 'tomato',
          size: '30',
          vegetables: ['tomato'],
        }}
      />
    );
    screen.debug();

    expect(getByText('Размер: 30см')).toBeInTheDocument();
    expect(getByText('Тесто: тонкое')).toBeInTheDocument();
    expect(getByText('Соус: томатный')).toBeInTheDocument();
    expect(getByText('Сыр: моцарелла')).toBeInTheDocument();
    expect(getByText('Овощи: помидор')).toBeInTheDocument();
    expect(getByText('Мясо: бекон')).toBeInTheDocument();
  });
});
