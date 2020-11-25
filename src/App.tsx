import React, { useState } from 'react';
import { PizzaConfiguratorPage } from './pizza-configurator-page';
import { PizzaOrderPreviewPage } from './pizza-order-preview-page/PizzaOrderPreviewPage';
// Types
import { PizzaConfiguration } from './types';

function App() {
  const [pizza, setPizza] = useState<PizzaConfiguration>();
  // const [pizza, setPizza] = useState<PizzaConfiguration>(DEFAULT_PIZZA);

  // TODO: сначала должна быть форма, сейчас это дефолтная пицца
  if (pizza) { // pizza
    return <PizzaOrderPreviewPage pizza={pizza} />;
  }

  // return <PizzaForm onPizzaCreated={setPizza} />;
  return <PizzaConfiguratorPage onPizzaCreated={setPizza} />;
}

export default App;
