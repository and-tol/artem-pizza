import { useState } from 'react';

let UseIngredients: [
  string[],
  (item: string) => void,
  (item: string) => void
];

export const useIngredients = (initialValue: string[]): typeof UseIngredients => {
  const [state, setState] = useState(initialValue || []);

  const addItem = (item: string) => {
    setState(s => [...s, item]);
  };
  const removeItem = (item: string) => {
    setState(s => s.filter((storedItem: string) => storedItem !== item));
  };

  return [state, addItem, removeItem];
};
