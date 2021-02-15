import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/init/store';
import { MemoryRouter } from 'react-router-dom';
import {
  OrderPreview,
} from '../src/share/components/OrderPreview';
import { CheckoutPage } from '../src/pages/checkout-page/CheckoutPage';
// Components
import { CheckoutForm } from '../src/pages/checkout-page/components';
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
