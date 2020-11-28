import React, { useState, useEffect, useRef } from 'react';
import { PizzaConfiguratorPage } from './pages/pizza-configurator-page';
import { PizzaOrderPreviewPage } from './pages/pizza-order-preview-page/PizzaOrderPreviewPage';
// Types
import { PizzaConfiguration } from './types';
import { DEFAULT_PIZZA } from './pizzaData';

function App() {
  const [pizza, setPizza] = useState<PizzaConfiguration>(DEFAULT_PIZZA);

  let render = useRef(true);

  useEffect(() => {
    render.current = false;
  }, [pizza]);

  if (render.current) {
    return <PizzaConfiguratorPage onPizzaCreated={setPizza} />;
  }
  return <PizzaOrderPreviewPage pizza={pizza} />;
}

export default App;
