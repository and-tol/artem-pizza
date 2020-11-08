// Core
import React, { FC, useState } from 'react';

type CheckboxFieldProps = {
  value: string;
  name: string;
  url: string;
  price: number;
  getSelectedIngredient?: (event: React.SyntheticEvent) => void;
};

export const CheckboxField: FC<CheckboxFieldProps> = props => {
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const target = event.target;

    setIsChecked(target.checked);
  };

  const { value, name, url, price } = props;

  return (
    <div>
      <img src={process.env.PUBLIC_URL + url} alt={value} width='64' />
      <p>{value}</p>
      <div>
        <p>{price} ₽</p>
        <input
          type='checkbox'
          name={name}
          checked={isChecked}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};
