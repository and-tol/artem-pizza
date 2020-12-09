import React, { FC } from 'react';
import {
  IngredientNameAndPriceState,
  IngredientNameState,
  refType,
} from '../../../types';

interface CheckboxGroupProps {
  register: refType;
  legend: string;
  options: IngredientNameAndPriceState | IngredientNameState;
  name: string;
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  register,
  legend,
  options,
  name,
}) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {Object.entries(options).map(option => {
        return (
          <label key={option[0]}>
            <input
              ref={register}
              type='checkbox'
              value={option[0]}
              name={name}
            />
            {option[1].name}
          </label>
        );
      })}
    </fieldset>
  );
};
