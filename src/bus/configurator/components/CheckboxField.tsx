import React, { FC, useEffect, useState, useRef } from 'react';

type CheckboxFieldProps = {
  value: string;
  name: string;
  img: string;
  price: number;
  selectedIngredient: (name: string, isChecked: boolean, price: number) => void;
};

export const CheckboxField: FC<CheckboxFieldProps> = props => {
  const { value, name, img, price, selectedIngredient } = props;

  const [isChecked, setIsChecked] = useState(false);
  const firstUpdate = useRef(true);

  const handleInputChange = (): void => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (!firstUpdate.current) {
      selectedIngredient(value, isChecked, price);
    }
    firstUpdate.current = false;
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
