import { render, screen } from '@testing-library/react';
import React from 'react';
import { PizzaPreview } from './PizzaPreview';

import { store } from '../../../init/store';
import { Provider } from 'react-redux';

describe('Pizza(Order)Preview', () => {
  const ingredients = store.getState().ingredients.ingredients

  it.skip('renders correctly with ingredients', () => {
    const totalPrice = jest.fn();
    const onSubmit = jest.fn();

    render(
      <Provider store={store}>
        <PizzaPreview
          pizza={{
            size: '30',
            dough: 'thin',
            sauces: 'tomato',
          }}
          ingredients={ingredients}
          totalPrice={totalPrice}
          onSubmit={onSubmit}
        />
      </Provider>
    );

    expect(screen.getByText(/30/i)).toBeInTheDocument();
    expect(screen.getByText(/тонком/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    // FIXME: expect(screen.getByText: Соус undefined
    expect(screen.getByText(/томатный/i)).toBeInTheDocument();
  });
});
