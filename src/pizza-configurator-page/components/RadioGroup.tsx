import React, { FC } from 'react';
import { IngredientNameAndPriceState, IngredientNameState } from '../../types';

interface RadioButtonsProps {
  legend: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selected: string;
  options: IngredientNameAndPriceState | IngredientNameState;
}

export const RadioGroup: FC<RadioButtonsProps> = props => {
  const { legend, name, onChange, selected, options } = props;

  return (
    <>
      <fieldset>
        <legend>{legend}</legend>
        {Object.entries(options).map(option => {
          return (
            <label key={option[0]}>
              <input
                type='radio'
                name={name}
                value={option[0]}
                onChange={onChange}
                checked={selected === option[0]}
              />
              {option[1].name}
              {name === 'size' ? 'см' : null}
            </label>
          );
        })}
      </fieldset>
    </>
  );
};
