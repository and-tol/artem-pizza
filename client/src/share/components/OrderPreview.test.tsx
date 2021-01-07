import { render, screen } from '@testing-library/react';
import React from 'react';
import { OrderPreview } from './OrderPreview';

import { store } from '../../init/store';
import { Provider } from 'react-redux';

describe('OrderPreview', () => {
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <OrderPreview
          pizza={{
            size: '30',
            dough: 'thin',
            sauce: 'tomato',
            cheese: ['mozarella'],
            vegetables: ['tomato'],
            meat: ['bacon'],
          }}
          ingredients={[]}
        />
      </Provider>
    );

    // FIXME: expect(screen.getByText
    // expect(screen.getByText(/Размер: 30см/i)).toBeInTheDocument();
    // expect(screen.getByText('Тесто: тонкое')).toBeInTheDocument();
    // expect(screen.getByText('Соус: томатный')).toBeInTheDocument();
    // expect(screen.getByText('Сыр: моцарелла')).toBeInTheDocument();
    // expect(screen.getByText('Овощи: помидор')).toBeInTheDocument();
    // expect(screen.getByText('Мясо: бекон')).toBeInTheDocument();
  });
});
