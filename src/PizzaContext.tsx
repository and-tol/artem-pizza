import React, { createContext, useContext, useState } from 'react';
import { DEFAULT_PIZZA } from './pizzaData';
import { PizzaConfiguration } from './types';

export interface PizzaContext {
  pizza?: PizzaConfiguration;
  setPizza?: React.Dispatch<React.SetStateAction<PizzaConfiguration>>;
}

interface PizzaProviderProps {
  children: React.ReactNode;
}

const PizzaContext = createContext<PizzaContext>({});

export const PizzaProvider = (props: PizzaProviderProps) => {
  const [pizza, setPizza] = useState(DEFAULT_PIZZA);

  return (
    <PizzaContext.Provider value={{ pizza, setPizza }}>
      {props.children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => useContext(PizzaContext);
