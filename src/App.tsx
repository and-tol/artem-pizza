import React, { useEffect, useRef, useState } from 'react';
import { PizzaConfiguratorPage } from './pages/pizza-configurator-page';
import { OrderPreviewPage } from './pages/order-preview-page';
import { DEFAULT_PIZZA } from './pizzaData';
// Types
import { PizzaConfiguration } from './types';

function App() {
  const [pizza, setPizza] = useState<PizzaConfiguration>(DEFAULT_PIZZA);

  let render = useRef(true);

  useEffect(() => {
    render.current = false;
  }, [pizza]);

  if (render.current) {
    return <PizzaConfiguratorPage onPizzaCreated={setPizza} />;
  }
  return <OrderPreviewPage pizza={pizza} />;
}

export default App;
