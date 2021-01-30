import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
// Pages
import { PizzaConfiguratorPage } from './pages/pizza-configurator-page';
import { CheckoutPage } from './pages/checkout-page';
import { LoginPage } from './pages/login-page';
import { OrdersListPage } from './pages/orders-list-page';
import { ReceiptPage } from './pages/receipt-page';
import { SignupPage } from './pages/signup-page';
import { NotFoundPage } from './pages/not-found-page';
// Components
import { Header } from './share/components/Header';
import { Footer } from './share/styled-components/Footer';


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
  @media (min-width: 960.5px) {
    width: 960px;
    padding: 32px 72px 32px;
  }
`;

function App() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default App;
