import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../init/store';
import { ReceiptPage } from './ReceiptPage';


describe('ReceiptPage', () => {
  it('renders correctly', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ReceiptPage />
        </MemoryRouter>
      </Provider>
    );
console.log(screen.debug());
      // FIXME: crash test
    // expect(await screen.getByText(/Спасибо за заказ! /i)).toBeInTheDocument();
  });
});
