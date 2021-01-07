import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../init/store';
import { MemoryRouter } from 'react-router-dom';
import { CheckoutPage } from './CheckoutPage';

// Components
import { CheckoutForm } from './components';
import { OrderPreview } from '../../share/components/OrderPreview';
// Types
import { OrderPreviewProps } from '../../share/components/OrderPreview';
import { CheckoutFormProps } from './components/CheckoutForm';
// Mocks
import { mockDefaultPizza } from './__mock__/defaulPizza';

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
