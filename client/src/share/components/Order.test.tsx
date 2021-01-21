import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../init/store';
import { mockOrder } from '../../testUtils/mockOrder';
import { Order } from './Order';

describe('Order', () => {
  it('renders correctly', () => {
    // FIXME: TypeError: Cannot read property 'name' of undefined
    render(
      <Provider store={store}>
        <Order order={mockOrder} />
      </Provider>
    );

    expect(screen.getByText('Заказ')).toBeInTheDocument();
  });
});
