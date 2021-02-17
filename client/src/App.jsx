import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { CheckoutPage } from './pages/checkout-page';
import { LoginPage } from './pages/login-page';
import { NotFoundPage } from './pages/not-found-page';
import { OrdersListPage } from './pages/orders-list-page';
// Pages
import { PizzaConfiguratorPage } from './pages/pizza-configurator-page';
import { OrderConfirmPage } from './pages/order-confirm-page';
import { SignupPage } from './pages/signup-page';
// Components
import {
  Header,
  HeaderConfiguratorPage,
  HeaderCheckoutPage,
  HeaderGeneral,
} from './share/components';
// Styles
const GlobWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: ${({ pathname }) =>
    pathname === '/checkout' && 'var(--gray100)'};
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px 16px 72px;

  @media (max-width: 360px) {
    width: 100%;
  }
  @media (max-width: 960px) {
    max-width: 960px;
  }
  @media (min-width: 960px) {
    width: 1024px;
    padding: 32px 40px 32px;
    padding: ${({ pathname }) => pathname === '/checkout' && '0'};
  }
`;

function App() {
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <GlobWrapper>
      <Header>
        {pathname === '/' && <HeaderConfiguratorPage />}
        {pathname === '/checkout' && <HeaderCheckoutPage />}
        {pathname === '/order-confirm' && <HeaderCheckoutPage />}
        {pathname === '/orders-list' && (
          <HeaderGeneral history={history} title='Мои заказы' />
        )}
        {pathname === '/login' && (
          <HeaderGeneral history={history} title='Авторизация' />
        )}
        {pathname === '/signup' && (
          <HeaderGeneral history={history} title='Регистрация' />
        )}
      </Header>
      <Main>
        <Switch>
          <Route exact path='/'>
            <PizzaConfiguratorPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/checkout'>
            <CheckoutPage />
          </Route>
          <Route path='/orders-list'>
            <OrdersListPage />
          </Route>
          <Route path='/order-confirm'>
            <OrderConfirmPage />
          </Route>
          <Route path='/signup'>
            <SignupPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Main>
    </GlobWrapper>
  );
}

export default App;
