// Core
import React, { FC } from 'react';
// PizzaData
import { pizzaData } from '../../pizzaData';
// Components
import { CheckboxField, PizzaOption, PizzaIngredient } from './components';



export const Configurator: FC = () => {
  const {
    pizzaSize,
    pizzaDough,
    pizzaSauce,
    pizzaCheese,
    pizzaVegetables,
    pizzaMeat,
  } = pizzaData;

  // const getSelectedIngredient = (event: React.SyntheticEvent) => {
  //   const target = event.target;
  //   console.log('target', target);
  // };

  const pizzaSizeJSX = (
    <PizzaOption data={pizzaSize} title='Размер' nameGroup='size' />
  );
  const pizzaDoughJSX = (
    <PizzaOption data={pizzaDough} title='Тесто' nameGroup='dough' />
  );

  const pizzaSauceJSX = (
    <PizzaOption data={pizzaSauce} title='Выберите соус' nameGroup='sauce' />
  );


  return (
    <section>
      <PizzaOption data={pizzaSize} title='Размер' nameGroup='size' />
      <PizzaOption data={pizzaDough} title='Тесто' nameGroup='dough' />
      <PizzaOption data={pizzaSauce} title='Выберите соус' nameGroup='sauce' />
      <PizzaIngredient legend='Добавьте сыр' pizzaData={pizzaCheese} />
      <PizzaIngredient legend='Добавьте овощи' pizzaData={pizzaVegetables} />
      <PizzaIngredient legend='Добавьте мясо' pizzaData={pizzaMeat} />

      <button>Заказать за {'300'} рублей</button>
    </section>
  );
};
