import React, { useState } from 'react';
import { PizzaForm } from './PizzaForm';
import { PizzaOrderPreview } from './PizzaOrderPreview';
import { DEFAULT_PIZZA } from './pizzaData';
// Types
import { PizzaConfiguration } from './types';

function App() {
  const [pizza, setPizza] = useState<PizzaConfiguration>(DEFAULT_PIZZA);

  // TODO: сначала должна быть форма, сейчас это дефолтная пицца
  if (false) { // pizza
    return <PizzaOrderPreview pizza={pizza} />;
  }

  return <PizzaForm onPizzaCreated={setPizza} />;
}

export default App;
