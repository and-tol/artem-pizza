// Core
import React, { Component } from 'react';
// InterfaceData
import { availabelData } from './availabelData';
// Components
import { RadioSelectionField } from './elements';
import { SelectionField } from './elements';

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
    const { pizzaSize, pizzaDough, pizzaSauce } = availabelData;

    const pizzaSizeJSX = (
      <>
        <p>Размер</p>
        {pizzaSize.map(({ size, name }) => {
          return <RadioSelectionField key={name} name={name} value={size} />;
        })}
      </>
    );

    const pizzaDoughJSX = (
      <>
        <p>Тесто</p>
        {pizzaDough.map(({ dough, name }) => {
          return <RadioSelectionField key={name} name={name} value={dough} />;
        })}
      </>
    );

    const pizzaSauceJSX = (
      <>
        <p>Выберите соус</p>
        {pizzaSauce.map(({ sauce }) => {
          return <SelectionField key={sauce} value={sauce} />;
        })}
      </>
    );

    return (
      <section>
        <div>{pizzaSizeJSX}</div>
        <div>{pizzaDoughJSX}</div>
        <div>{pizzaSauceJSX}</div>
      </section>
    );
  }
}
