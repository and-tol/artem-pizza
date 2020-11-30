import React, { createContext, useContext, useState } from 'react';
import { DEFAULT_PIZZA } from './pizzaData';
import { PizzaConfiguration } from './types';

export interface PizzaContextI {
  pizza?: PizzaConfiguration;
  setPizza?: React.Dispatch<React.SetStateAction<PizzaConfiguration>>;
}

interface PropsPizzaProvider {
  children: React.ReactNode;
}

const PizzaContext = createContext<PizzaContextI>({});

export const PizzaProvider = (props: PropsPizzaProvider) => {
  const [pizza, setPizza] = useState(DEFAULT_PIZZA);

  return (
    <PizzaContext.Provider value={{ pizza, setPizza }}>
      {props.children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => useContext(PizzaContext);
