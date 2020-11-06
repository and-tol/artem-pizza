// Core
import React, { Component } from 'react';
// InterfaceData
import { availabelData } from './availabelData';
// Components
import { CheckboxField } from './elements';
import { RadioGroup } from './components';

type ConfiguratorState = {};
type ConfiguratorProps = {};

export class Configurator extends Component<
  ConfiguratorProps,
  ConfiguratorState
> {
  constructor(props: ConfiguratorProps) {
    super(props);
  }

  render() {
    const {
      pizzaSize,
      pizzaDough,
      pizzaSauce,
      pizzaCheese,
      pizzaVegetables,
      pizzaMeat,
    } = availabelData;


    const pizzaSizeJSX = (
      <RadioGroup data={pizzaSize} title='Размер' nameGroup='size' />
    );
    const pizzaDoughJSX = (
      <RadioGroup data={pizzaDough} title='Тесто' nameGroup='dough' />
    );

    const pizzaSauceJSX = (
      <RadioGroup data={pizzaSauce} title='Выберите соус' nameGroup='sauce' />
    );

    const pizzaCheeseJSX = (
      <>
        <p>Добавьте сыр</p>
        {pizzaCheese.map(({ value, name, url, price }) => (
          <CheckboxField
            key={name}
            value={value}
            name={name}
            url={url}
            price={price}
          />
        ))}
      </>
    );

    const pizzaVegetablesJSX = (
      <>
        <p>Добавьте овощи</p>
        {pizzaVegetables.map(({ value, name, url, price }) => (
          <CheckboxField
            key={name}
            value={value}
            name={name}
            url={url}
            price={price}
          />
        ))}
      </>
    );
    const pizzaMeatJSX = (
      <>
        <p>Добавьте овощи</p>
        {pizzaMeat.map(({ value, name, url, price }) => (
          <CheckboxField
            key={name}
            value={value}
            name={name}
            url={url}
            price={price}
          />
        ))}
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
  }
}
