import React, { useState } from 'react';
import { PizzaConfiguratorPage } from './pages/pizza-configurator-page';
import { PizzaOrderPreviewPage } from './pages/pizza-order-preview-page/PizzaOrderPreviewPage';
// Types
import { PizzaConfiguration } from './types';
import { DEFAULT_PIZZA } from './pizzaData';

function App() {
  const [pizza, setPizza] = useState<PizzaConfiguration>(DEFAULT_PIZZA);

  if (pizza) {
    return <PizzaOrderPreviewPage pizza={pizza} />;
  }

  return <PizzaConfiguratorPage onPizzaCreated={setPizza} />;
}

export default App;
