import React, { useState } from 'react';
import { PizzaForm } from './PizzaForm';
import { PizzaOrderPreview } from './PizzaOrderPreview';

function App() {
  const [pizza, setPizza] = useState<object | undefined>();

  if (pizza) {
    return <PizzaOrderPreview pizza={pizza} />;
  }

  return <PizzaForm onPizzaCreated={setPizza} />;
}

export default App;
