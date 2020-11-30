import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { OrderPreviewPage } from './OrderPreviewPage';
import { createMemoryHistory } from 'history';
// Types
import { OrderPreviewProps } from './OrderPreview';

jest.mock('./OrderPreview.tsx', () => ({
  OrderPreview: ({ pizza }: OrderPreviewProps) => {
    return <div>{pizza.sauce}</div>;
  },
}));

describe('OrderPreviewPage', () => {
  it('renders correctly if pizza not undefined', () => {
    const { getByText } = render(
      <MemoryRouter>
        <OrderPreviewPage
          _usePizzaHook={() => ({
            pizza: {
              size: 'test1',
              dough: 'test2',
              sauce: 'test3',
              cheese: ['test4'],
              vegetables: ['test5'],
              meat: ['test6'],
            },
          })}
        />
      </MemoryRouter>
    );

    expect(getByText('Ленивая Маргарита')).toBeInTheDocument();
  });
  it("if pizza=undefined redirect  to '/'", () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <OrderPreviewPage
          _usePizzaHook={() => ({
            pizza: undefined
          })}
        />
      </Router>
    );

    expect(history.location.pathname).toEqual('/')
  });
});
