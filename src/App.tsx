import React, { useState } from 'react';
import { PizzaForm } from './PizzaForm';
import { PizzaOrderPreview } from './PizzaOrderPreview';
// Types
import { PizzaConfiguration } from './types';

function App() {
  const [pizza, setPizza] = useState<PizzaConfiguration | undefined>();

  if (pizza) {
    return <PizzaOrderPreview pizza={pizza} />;
  }

  return <PizzaForm onPizzaCreated={setPizza} />;
}

export default App;
