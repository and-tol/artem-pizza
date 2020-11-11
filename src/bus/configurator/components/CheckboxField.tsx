import React, { FC, useEffect, useState } from 'react';

type CheckboxFieldProps = {
  value: string;
  name: string;
  img: string;
  price: number;
  // selectedIngredient?: (event: React.SyntheticEvent) => void;
  selectedIngredient: (name: string, isChecked: boolean, price: number) => void;
};

export const CheckboxField: FC<CheckboxFieldProps> = props => {
  const { value, name, img, price,  selectedIngredient } = props;

  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (): void => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    selectedIngredient(value, isChecked, price);
  }, [isChecked]);

  return (
    <div>
      {/* <img src={process.env.PUBLIC_URL + img} alt={value} width='64' /> */}
      <p>{value}</p>
      <div>
        <p>{price} ₽</p>
        <input
          type='checkbox'
          name={name}
          value={value}
          checked={isChecked}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};
