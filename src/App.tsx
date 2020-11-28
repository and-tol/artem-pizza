import React, { useEffect, useRef, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// Pages
import { PizzaConfiguratorPage } from './pages/pizza-configurator-page';
import { OrderPreviewPage } from './pages/order-preview-page';
import { CheckoutPage } from './pages/checkout-page';
import { LoginPage } from './pages/login-page';
import { OrdersListPage } from './pages/orders-list-page';
import { ReceiptPage } from './pages/receipt-page';
import { SignupPage } from './pages/signup-page';
// Data
import { DEFAULT_PIZZA } from './pizzaData';
// Types
import { PizzaConfiguration } from './types';
import { NotFoundPage } from './pages/not-found-page';

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

  const onPizzaCreated = () => {};
  const pizza = DEFAULT_PIZZA;

  return (
    <Switch>
      <Route exact path='/pizza-configurator'>
        <PizzaConfiguratorPage onPizzaCreated={onPizzaCreated} />
      </Route>
      <Route path='/order-preview'>
        <OrderPreviewPage pizza={pizza} />
      </Route>
      <Route path='/login'>
        <LoginPage />
      </Route>
      <Route path='/checkout'>
        <CheckoutPage />
      </Route>
      <Route path='/order-list'>
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
