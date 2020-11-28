import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { DEFAULT_PIZZA } from './pizzaData';
import { PizzaConfiguration } from './types';

interface PizzaContextI {
  pizza: PizzaConfiguration;
  setPizza: React.Dispatch<React.SetStateAction<PizzaConfiguration>>;
}

interface Props {
  children: React.ReactNode;
}

const PizzaContext = createContext<PizzaContextI | null>(null);

export const PizzaProvider = (props: Props) => {
  const [pizza, setPizza] = useState(DEFAULT_PIZZA);

  return (
    <PizzaContext.Provider value={{ pizza, setPizza }}>
      {props.children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => useContext(PizzaContext);
