import { render  } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Router } from 'react-router-dom';
import { store } from '../../init/store';
import { ReceiptPage } from './ReceiptPage';
import { createMemoryHistory } from 'history';

describe('ReceiptPage', () => {
  const history = createMemoryHistory();
  it('renders if isAccepted true', async () => {
    const isAccepter = true;

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Router history={history}>
            <ReceiptPage />
          </Router>
        </MemoryRouter>
      </Provider>
    );

    // FIXME: crash test,
    // TODO: need rease mock const isAccepted = useSelector(getAcceptedOrder);
    // expect(await screen.getByText(/Спасибо за заказ! /i)).toBeInTheDocument();
  });
});
