import React, { FC } from 'react';
import { IngredientNameAndPriceState, IngredientNameState } from '../../../types';

interface CheckboxGroupProps  {
  // register: () => void;
  legend: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: IngredientNameAndPriceState | IngredientNameState;
  isSelected: string[];
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  // register,
  legend,
  onChange,
  options,
  isSelected,
}) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {Object.entries(options).map(option => {
        return (
          <label key={option[0]}>
            <input
              // ref={register}
              type='checkbox'
              value={option[0]}
              onChange={onChange}
              checked={isSelected.includes(option[0])}
            />
            {option[1].name}
          </label>
        );
      })}
    </fieldset>
  );
};
