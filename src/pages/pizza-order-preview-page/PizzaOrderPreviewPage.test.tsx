import { render } from '@testing-library/react';
import React from 'react';
import { PizzaOrderPreviewPage } from './PizzaOrderPreviewPage';

describe('PizzaOrderPreviewPage', () => {
  it('renders correctly', () => {
    // Arrange
    const { getByText } = render(
      <PizzaOrderPreviewPage
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

    expect(getByText("Размер: 30см")).toBeInTheDocument()
    expect(getByText('Тесто: тонкое')).toBeInTheDocument();
    expect(getByText('Соус: томатный')).toBeInTheDocument();
    expect(getByText('Сыр: моцарелла')).toBeInTheDocument();
    expect(getByText('Овощи: помидор')).toBeInTheDocument();
    expect(getByText('Мясо: бекон')).toBeInTheDocument();
  });
});
