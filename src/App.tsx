import React, { useEffect, useRef, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// Navigation
import { book } from '../temp/book';
// Pages

import { PizzaConfiguratorPage } from './pages/pizza-configurator-page';
import { OrderPreviewPage } from './pages/order-preview-page';
import { CheckoutPage } from './pages/checkout-page';
import { LoginPage } from './pages/login-page';
import { OrdersListPage } from './pages/orders-list-page';
import { ReceiptPage } from './pages/receipt-page';
import { SignupPage } from './pages/signup-page';
import { DEFAULT_PIZZA } from './pizzaData';
// Types
import { PizzaConfiguration } from './types';

function App() {
  // const [pizza, setPizza] = useState<PizzaConfiguration>(DEFAULT_PIZZA);

  // let render = useRef(true);

  // useEffect(() => {
  //   render.current = false;
  // }, [pizza]);

  // if (render.current) {
  //   return <PizzaConfiguratorPage onPizzaCreated={setPizza} />;
  // }
  // return <OrderPreviewPage pizza={pizza} />;
  return (
    <Switch>
      <Route path={book.pizzaConfigurator.url}></Route>
    </Switch>
  );
}

export default App;
