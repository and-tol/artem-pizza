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


  return (
    <section>
      <PizzaOption legend='Размер' data={pizzaSize} nameGroup='size' />
      <PizzaOption legend='Тесто' data={pizzaDough} nameGroup='dough' />
      <PizzaOption legend='Выберите соус' data={pizzaSauce} nameGroup='sauce' />
      <PizzaIngredient legend='Добавьте сыр' pizzaData={pizzaCheese} />
      <PizzaIngredient legend='Добавьте овощи' pizzaData={pizzaVegetables} />
      <PizzaIngredient legend='Добавьте мясо' pizzaData={pizzaMeat} />

      <button>Заказать за {'300'} рублей</button>
    </section>
  );
};
