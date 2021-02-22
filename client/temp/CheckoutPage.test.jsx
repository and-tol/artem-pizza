import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../src/init/store';
import { CheckoutPage } from '../src/pages/CheckoutPage/CheckoutPage';
// Components
import { CheckoutForm } from '../src/pages/CheckoutPage/components';
import {
    OrderPreview
} from '../src/share/components/OrderPreview';
// Mocks
import { mockDefaultPizza } from '../src/testUtils/mockDefaultPizza';

jest.mock('../../share/components/OrderPreview', () => ({
  OrderPreview: ({ pizza, ingredients }) => {
    return <div>Mocked Order Preview</div>;
  },
}));

jest.mock('./components', () => ({
  CheckoutForm: ({ pizza, ingredients }) => {
    // CheckoutForm: () => {
    return <div>Mocked Checkout Form</div>;
  },
}));

afterEach(cleanup);

describe('CheckoutPage', () => {
  it('renders correctly', () => {
    // FIXME: почему pizza undefined
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CheckoutPage>
            <>
              <OrderPreview pizza={mockDefaultPizza} ingredients={[]} />
              <CheckoutForm pizza={mockDefaultPizza} ingredients={[]} />
            </>
          </CheckoutPage>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Оформление заказа')).toBeInTheDocument();
  });
});
