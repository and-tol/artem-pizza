import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Pages
import { PizzaConfiguratorPage } from './pages/pizza-configurator-page';
import { OrderPreviewPage } from './pages/order-preview-page';
import { CheckoutPage } from './pages/checkout-page';
import { LoginPage } from './pages/login-page';
import { OrdersListPage } from './pages/orders-list-page';
import { ReceiptPage } from './pages/receipt-page';
import { SignupPage } from './pages/signup-page';
import { NotFoundPage } from './pages/not-found-page';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <PizzaConfiguratorPage />
      </Route>
      <Route path='/order-preview'>
        <OrderPreviewPage />
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
  );
}

export default App;
