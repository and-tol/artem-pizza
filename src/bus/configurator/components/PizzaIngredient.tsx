// Core
import React, { FC } from 'react';
// Components
import {CheckboxField} from './CheckboxField'
// Types
import { PizzaIngredients } from '../../../pizzaData';
type PizzaIngredientProps = {
  legend: string;
  pizzaData: PizzaIngredients[];
};

export const PizzaIngredient: FC<PizzaIngredientProps> = props => {
  const { legend, pizzaData } = props;

  const ingredientTempStyles = {
    checks: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '6px',
    },
    block: {
      width: '300px',
      maxWidth: '300px',
    },
  };

  return (
    <>
      <fieldset style={ingredientTempStyles.block}>
        <legend>{legend}</legend>
        <div style={ingredientTempStyles.checks}>
          {pizzaData.map(({ value, name, url, price }) => (
            <CheckboxField
              key={name}
              value={value}
              name={name}
              url={url}
              price={price}
            />
          ))}
        </div>
      </fieldset>
    </>
  );
};
