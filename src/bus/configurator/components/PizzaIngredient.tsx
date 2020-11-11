
import React, { FC, useState } from 'react';
import { PizzaIngredients } from '../../../types';

type PizzaIngredientProps = {
  legend: string;
  data: PizzaIngredients[];
  selectCheese(event: React.ChangeEvent<HTMLInputElement>): void
};
const ingredientStyles = {
  checks: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '6px',
  },
  block: {
    width: '300px',
    maxWidth: '300px',
  },
};

export const PizzaIngredient: FC<PizzaIngredientProps> = props => {
  const { legend, data, selectCheese } = props;

  const [selectName, setSelectName] = useState('');

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const target = event.target;

    setSelectName(target.name);
  };

  return (
    <>
      <fieldset style={ingredientStyles.block}>
        <legend>{legend}</legend>
        <div style={ingredientStyles.checks}>
          {data.map(({ value, name, url, price }) => (
            <div key={name}>
              {/* <img src={process.env.PUBLIC_URL + url} alt={value} width='64' /> */}
              <p>{value}</p>
              <div>
                <p>{price} ₽</p>
                <input
                  type='checkbox'
                  name={name}
                  checked={selectName===name}
                  onChange={(e) => {
                    handleInputChange(e)
                    selectCheese(e)
                  }}
                  // onChange={handleInputChange}
                />
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </>
  );
};
