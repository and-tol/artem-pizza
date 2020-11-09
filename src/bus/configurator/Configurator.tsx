// Core
import React, { FC, useState } from 'react';
// Types
import { PizzaOrder, PizzaData } from '../../types';
// PizzaData
import { pizzaData, pizzaOrder, START_PRICE } from '../../pizzaData';
// Components
import { PizzaOption, PizzaIngredient } from './components';

const getPizzaPrice = (order: PizzaOrder, pizzaData: PizzaData) => {
  let price = 0;
  price += pizzaData.pizzaSize.filter(el => el.value === order.size)[0].price;

  return price;
};

export const Configurator: FC = () => {
  const {
    pizzaSize,
    pizzaDough,
    pizzaSauce,
    pizzaCheese,
    pizzaVegetables,
    pizzaMeat,
  } = pizzaData;

  const [order, setOrder] = useState(pizzaOrder);

  // const getSelectedIngredient = (event: React.SyntheticEvent) => {
  //   const target = event.target;
  //   console.log('target', target);
  // };

  // Order
  const [pizzaPrice, setPizzaPrice] = useState(START_PRICE);

  // Pizza Size
  const [selectedValueSize, setValueSize] = useState(pizzaSize[0].value);

  const onChangeValueSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValueSize(value);

    const selected = pizzaSize.filter(el => el.value === value)[0];
    setOrder(prevPizzaOrder => ({
      ...prevPizzaOrder,
      size: selected.value,
    }));
  };

  // Pizza Dough
  const [selectedValueDough, setValueDough] = useState(pizzaDough[0].value);

  const onChangeValueDough = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValueDough(value);

    const selected = pizzaDough.filter(el => el.value === value)[0];
    setOrder(prevPizzaOrder => ({
      ...prevPizzaOrder,
      dough: selected.value,
    }));
  };

  // Pizza Sauce
  const [selectedValueSauce, setValueSauce] = useState(pizzaSauce[0].value);

  const onChangeValueSauce = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValueSauce(value);

    const selected = pizzaSauce.filter(el => el.value === value)[0];
    setOrder(prevPizzaOrder => ({
      ...prevPizzaOrder,
      sauce: selected.value,
    }));
  };

  console.log('order>>>>', order);

  return (
    <section>
      <PizzaOption
        legend='Размер'
        data={pizzaSize}
        selectedValue={selectedValueSize}
        nameGroup='size'
        onChangeValue={onChangeValueSize}
      />
      <PizzaOption
        legend='Тесто'
        data={pizzaDough}
        selectedValue={selectedValueDough}
        nameGroup='dough'
        onChangeValue={onChangeValueDough}
      />
      <PizzaOption
        legend='Выберите соус'
        data={pizzaSauce}
        selectedValue={selectedValueSauce}
        nameGroup='sauce'
        onChangeValue={onChangeValueSauce}
      />
      <PizzaIngredient legend='Добавьте сыр' data={pizzaCheese} />
      <PizzaIngredient legend='Добавьте овощи' data={pizzaVegetables} />
      <PizzaIngredient legend='Добавьте мясо' data={pizzaMeat} />

      <button>Заказать за {pizzaPrice} рублей</button>
    </section>
  );
};
