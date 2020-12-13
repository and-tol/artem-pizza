import { render, screen } from '@testing-library/react';
import React from 'react';

import { PizzaContext } from './PizzaContext';
import { CheckoutPage } from './pages/checkout-page';

// https://testing-library.com/docs/example-react-context/
// https://www.youtube.com/watch?v=APkWo-na450&list=PLNkWIWHIRwMEsMUc0B-lYb7DTLroWlKLK&index=9&t=12s

describe('PizzaContext', () => {
  it('renders correctly', () => {
    const setPizza = jest.fn();
    render(
      <PizzaContext.Provider value={{}}>
        <CheckoutPage />
      </PizzaContext.Provider>
    );

    expect(screen.getByText('Оформление заказа')).toBeInTheDocument();
  });

  // DEFAULT_PIZZA, Оформление заказа
  it('show defaul value', () => {
    const setPizza = jest.fn();
    const pizza = jest.mock({ test1: 'test2' });

    render(
      <PizzaContext.Provider value={{ pizza, setPizza }}>
        <CheckoutPage />
      </PizzaContext.Provider>
    );
  });
});
