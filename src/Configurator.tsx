// Core
import React, { Component } from 'react';
// InterfaceData
import { availabelData } from './availabelData';
// Components
import { RadioSelectionField, SelectionField, CheckboxField } from './elements';
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

    // const pizzaSizeJSX = (
    //   <>
    //     <p>Размер</p>
    //     {pizzaSize.map(({ value, name }) => {
    //       return <RadioSelectionField key={name} name={name} value={value} />;
    //     })}
    //   </>
    // );

    const pizzaDoughJSX = (
      <RadioGroup
        data={pizzaDough}
        title='Тесто'
        nameGroup='dough' />
    );

    // const pizzaDoughJSX2 = (
    //   <>
    //     <p>Тесто</p>
    //     {pizzaDough.map(({ value, name }) => {
    //       return <RadioSelectionField key={name} name={name} value={value} />;
    //     })}
    //   </>
    // );

    const pizzaSauceJSX = (
      <>
        <p>Выберите соус</p>
        {pizzaSauce.map(({ value, name }) => {
          return <SelectionField key={name} value={value} />;
        })}
      </>
    );

    const pizzaCheeseJSX = (
      <>
        <p>Добавьте сыр</p>
        {pizzaCheese.map(({ value, name, url, price }) => {
          return (
            <CheckboxField
              key={name}
              value={value}
              name={name}
              url={url}
              price={price}
            />
          );
        })}
      </>
    );

    const pizzaVegetablesJSX = (
      <>
        <p>Добавьте овощи</p>
        {pizzaVegetables.map(({ value, name, url, price }) => {
          return (
            <CheckboxField
              key={name}
              value={value}
              name={name}
              url={url}
              price={price}
            />
          );
        })}
      </>
    );
    const pizzaMeatJSX = (
      <>
        <p>Добавьте овощи</p>
        {pizzaMeat.map(({ value, name, url, price }) => {
          return (
            <CheckboxField
              key={name}
              value={value}
              name={name}
              url={url}
              price={price}
            />
          );
        })}
      </>
    );

    return (
      <section>
        {/* <div>{pizzaSizeJSX}</div> */}
        <div>{pizzaDoughJSX}</div>
        <div>{pizzaSauceJSX}</div>
        <div>{pizzaCheeseJSX}</div>
        <div>{pizzaVegetablesJSX}</div>
        <div>{pizzaMeatJSX}</div>
      </section>
    );
  }
}
