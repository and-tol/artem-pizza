import { FC } from 'react';
import { Ingredient, refType } from '../../../types';

interface CheckboxGroupProps {
  register: refType;
  legend: string;
  name: string;
  options: Ingredient[] | [];
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
          <label key={option[1].id}>
            <input
              ref={register}
              type='checkbox'
              value={option[1].slug}
              name={name}
            />
            {option[1].name}
          </label>
        );
      })}
    </fieldset>
  );
};
