
import React, { FC, useEffect, useState } from 'react';

type CheckboxFieldProps = {
  value: string;
  name: string;
  url: string;
  price: number;
  getSelectedIngredient?: (event: React.SyntheticEvent) => void;
  selectCheese(name: string, isChecked: boolean): void
};

export const CheckboxField: FC<CheckboxFieldProps> = props => {
  const { value, name, url, price, selectCheese } = props;

  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const target = event.target;

    setIsChecked(target.checked);
    selectCheese(target.name, isChecked);
  };

  useEffect(() => {
    selectCheese(name, isChecked);
  }, [isChecked]);

  return (
    <div>
      {/* <img src={process.env.PUBLIC_URL + url} alt={value} width='64' /> */}
      <p>{value}</p>
      <div>
        <p>{price} ₽</p>
        <input
          type='checkbox'
          name={name}
          checked={isChecked}
          onChange={(e) => {
            handleInputChange(e);
            // selectCheese(name, isChecked);
          }}
        />
      </div>
    </div>
  );
};
