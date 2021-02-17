import { render, screen } from '@testing-library/react';
import React from 'react';
import {Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../init/store';
import { mockOrder } from '../../testUtils/mockOrder';

import { Order } from './Order';
import { createMemoryHistory } from 'history'

describe('Order', () => {
  const history = createMemoryHistory()
  it('renders correctly', () => {
    // FIXME: TypeError: Cannot read property 'name' of undefined
    render(
      <Provider store={store}>
        <Router history={history}>
          <Order order={mockOrder} />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Заказ')).toBeInTheDocument();
  });
});
