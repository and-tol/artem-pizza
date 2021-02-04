import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { CheckoutPage } from './pages/checkout-page';
import { LoginPage } from './pages/login-page';
import { NotFoundPage } from './pages/not-found-page';
import { OrdersListPage } from './pages/orders-list-page';
// Pages
import { PizzaConfiguratorPage } from './pages/pizza-configurator-page';
import { ReceiptPage } from './pages/order-confirm-page';
import { SignupPage } from './pages/signup-page';
// Components
import {
  Header,
  HeaderConfiguratorPage,
  HeaderCheckoutPage,
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
  flex-direction: column;
  padding: 16px 16px 72px;

  @media (max-width: 360px) {
    width: 100%;
  }
  @media (max-width: 960px) {
    max-width: 960px;
  }
  @media (min-width: 960px) {
    width: 960px;
    padding: 32px 72px 32px;
    padding: ${({ pathname }) => pathname === '/checkout' && '0'};
  }
`;

function App() {
  const { pathname } = useLocation();

  return (
    <GlobWrapper pathname={pathname}>
      <Header>
        {pathname === '/' && <HeaderConfiguratorPage />}
        {pathname === '/checkout' && <HeaderCheckoutPage />}
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
          <Route path='/receipt'>
            <ReceiptPage />
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
