import { FC } from 'react';
import { refType, Ingredient } from '../../../types';

interface RadioButtonsProps {
  register: refType;
  legend: string;
  name: string;
  options: Ingredient[] | [];
}

export const RadioGroup: FC<RadioButtonsProps> = props => {
  const { register, legend, name, options } = props;

  return (
    <>
      <fieldset>
        <legend>{legend}</legend>
        {Object.entries(options).map(option => (
          <label key={option[1].id}>
            <input
              ref={register}
              type='radio'
              name={name}
              value={option[1].slug}
            />
            {option[1].name}
            {name === 'size' ? 'см' : null}
          </label>
        ))}
      </fieldset>
    </>
  );
};
