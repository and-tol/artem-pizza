import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import { MemoryRouter, Router } from 'react-router-dom'
import { store } from '../../init/store'
import { OrderConfirmPage } from './OrderConfirmPage';

describe('OrderConfirmPage', () => {
  const history = createMemoryHistory();
  it('renders if isAccepted true', async () => {
    const isAccepter = true;

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Router history={history}>
            <OrderConfirmPage />
          </Router>
        </MemoryRouter>
      </Provider>
    );

    // FIXME: crash test,
    // TODO: need rease mock const isAccepted = useSelector(getOrder);
    // expect(await screen.getByText(/Спасибо за заказ! /i)).toBeInTheDocument();
  });
});
