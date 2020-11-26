import React, { FC } from 'react';
import { IngredientNameAndPriceState, IngredientNameState } from '../../types';

interface CheckboxGroupProps {
  legend: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: IngredientNameAndPriceState | IngredientNameState;
  isSelected: string[];
}

export const CheckboxGroup: FC<CheckboxGroupProps> = props => {
  const { legend, onChange, options, isSelected } = props;

  return (
    <fieldset>
      <legend>{legend}</legend>
      {Object.entries(options).map(option => {
        return (
          <label key={option[0]}>
            <input
              type='checkbox'
              value={option[0]}
              onChange={onChange}
              checked={isSelected.includes(option[0])}
            />
            {option[1].name}
          </label>
        );
      })}
      {/* <label>
        <input
          type='checkbox'
          value='cheddar'
          onChange={updateCheese}
          checked={cheese.includes('cheddar')}
        />
        Чеддер
      </label>
      <label>
        <input
          type='checkbox'
          value='dorblue'
          onChange={updateCheese}
          checked={cheese.includes('dorblue')}
        />
        Дор Блю
      </label> */}
    </fieldset>
  );
};
