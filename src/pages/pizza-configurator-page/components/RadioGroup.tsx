import React, { FC } from 'react';
import {
  IngredientNameAndPriceState,
  IngredientNameState,
  refType,
} from '../../../types';

interface RadioButtonsProps {
  register: refType;
  legend: string;
  name: string;

  options: IngredientNameAndPriceState | IngredientNameState;
}

export const RadioGroup: FC<RadioButtonsProps> = props => {
  const { register, legend, name, options } = props;

  return (
    <>
      <fieldset>
        <legend>{legend}</legend>
        {Object.entries(options).map(option => (
          <label key={option[0]}>
            <input
              ref={register}
              type='radio'
              name={name}
              value={option[0]}

            />
            {option[1].name}
            {name === 'size' ? 'см' : null}
          </label>
        ))}
      </fieldset>
    </>
  );
};
