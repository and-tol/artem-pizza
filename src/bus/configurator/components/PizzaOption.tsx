// Core
import React, { FC, useState } from 'react';
// Types
import { PizzaOptions } from '../../../pizzaData';

type PizzaOptionProps = {
  data: Array<PizzaOptions>;
  title: string;
  nameGroup: string;
};

/**
 * Component render options of the pizza with radio buttons
 */
export const PizzaOption: FC<PizzaOptionProps> = props => {
  const { data, title, nameGroup } = props;
  const [selectedValue, setValue] = useState(data[0].value);

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  return (
    <fieldset style={{ width: '300px', maxWidth: '300px' }}>
      <legend>{title}</legend>
      {data.map(({ value, name }) => {
        return (
          <div key={name} style={{ display: 'inline-block' }}>
            <label style={{ margin: '10px' }}>
              <input
                type='radio'
                name={nameGroup}
                value={value}
                checked={selectedValue === value}
                onChange={onChangeValue}
              />
              {value}
            </label>
          </div>
        );
      })}
    </fieldset>
  );
};
