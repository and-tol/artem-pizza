import { useState } from 'react';

export const useIngredients = (initialValue: string[]) => {
  const [state, setState] = useState(initialValue || []);

  const addItem = (item: string) => {
    setState(s => [...s, item]);
  };
  const removeItem = (item: string) => {
    setState(s => s.filter((storedItem: string) => storedItem !== item));
  };

  return  {state, addItem, removeItem};
};
