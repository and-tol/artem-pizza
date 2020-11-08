// Core
import React, { FC } from 'react';
// InterfaceData
import { availabelData } from '../../availabelData';
// Components
import { CheckboxField } from './components';
import { RadioGroup } from './components';

type ConfiguratorProps = {};

export const Configurator: FC<ConfiguratorProps> = () => {
  const {
    pizzaSize,
    pizzaDough,
    pizzaSauce,
    pizzaCheese,
    pizzaVegetables,
    pizzaMeat,
  } = availabelData;

  const getSelectedIngredient = (event: React.SyntheticEvent): void => {
    const target = event.target;
    console.log('target', target);
  };

  const pizzaSizeJSX = (
    <RadioGroup data={pizzaSize} title='Размер' nameGroup='size' />
  );
  const pizzaDoughJSX = (
    <RadioGroup data={pizzaDough} title='Тесто' nameGroup='dough' />
  );

  const pizzaSauceJSX = (
    <RadioGroup data={pizzaSauce} title='Выберите соус' nameGroup='sauce' />
  );

  const checkboxTempStyles = {
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

  const pizzaCheeseJSX = (
    <>
      <fieldset style={checkboxTempStyles.block}>
        <legend>Добавьте сыр</legend>
        <div style={checkboxTempStyles.checks}>
          {pizzaCheese.map(({ value, name, url, price }) => (
            <CheckboxField
              key={name}
              value={value}
              name={name}
              url={url}
              price={price}
              getSelectedIngredient={getSelectedIngredient}
            />
          ))}
        </div>
      </fieldset>
    </>
  );

  const pizzaVegetablesJSX = (
    <>
      <fieldset style={checkboxTempStyles.block}>
        <legend>Добавьте овощи</legend>
        <div style={checkboxTempStyles.checks}>
          {pizzaVegetables.map(({ value, name, url, price }) => (
            <CheckboxField
              key={name}
              value={value}
              name={name}
              url={url}
              price={price}
            />
          ))}
        </div>
      </fieldset>
    </>
  );
  const pizzaMeatJSX = (
    <>
      <fieldset style={checkboxTempStyles.block}>
        <legend>Добавьте овощи</legend>
        <div style={checkboxTempStyles.checks}>
          {pizzaMeat.map(({ value, name, url, price }) => (
            <CheckboxField
              key={name}
              value={value}
              name={name}
              url={url}
              price={price}
            />
          ))}
        </div>
      </fieldset>
    </>
  );

  return (
    <section>
      {pizzaSizeJSX}
      {pizzaDoughJSX}
      {pizzaSauceJSX}

      <div>{pizzaCheeseJSX}</div>
      <div>{pizzaVegetablesJSX}</div>
      <div>{pizzaMeatJSX}</div>
    </section>
  );
};
