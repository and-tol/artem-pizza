import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../init/store';
import { MemoryRouter } from 'react-router-dom';
import {
  OrderPreview,
  OrderPreviewProps,
} from '../../share/components/OrderPreview';
import { CheckoutPage } from './CheckoutPage';
// Components
import { CheckoutForm } from './components';
import { CheckoutFormProps } from './components/CheckoutForm';
// Mocks
import { mockDefaultPizza } from '../../__mock__/defaulPizza';

jest.mock('../../share/components/OrderPreview', () => ({
  OrderPreview: ({ pizza, ingredients }: OrderPreviewProps) => {
    return <div>Mocked Order Preview</div>;
  },
}));

jest.mock('./components', () => ({
  CheckoutForm: ({ pizza, ingredients }: CheckoutFormProps) => {
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
