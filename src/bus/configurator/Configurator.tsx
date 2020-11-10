// Core
import React, { FC, useState } from 'react';
// PizzaData
import { pizzaData, pizzaOrder, START_PRICE } from '../../pizzaData';
// Types
import { PizzaData, PizzaOrder } from '../../types';
// Components
import { CheckboxField, PizzaOption } from './components';
// Styles
const ingredientTempStyles = {
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

const getPizzaPrice = (order: PizzaOrder, pizzaData: PizzaData) => {
  let price = 0;
  price += pizzaData.pizzaSize.filter(el => el.value === order.size)[0].price;

  return price;
};

// Item deleting
const deleteItem = (data: string[], value: string) => {

  const idx: number = data.findIndex(el => el === value);

  const newData = [...data.slice(0, idx), ...data.slice(idx + 1)];

  return newData;
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

  // Pizza Cheese

  const selectCheese = (name: string, isChecked: boolean): void => {
    const selected = [pizzaCheese.filter(el => el.name === name)[0].value];
    // const selected = pizzaCheese.filter(el => el.name === name)[0].value;

    if (isChecked) {
      setOrder(prevPizzaOrder => ({
        ...prevPizzaOrder,
        cheese: [...prevPizzaOrder.cheese, ...selected],
      }));
    } else {
      // setOrder(prevPizzaOrder => ({
      //   ...prevPizzaOrder,
      //   cheese: [...deleteItem(prevPizzaOrder.cheese, selected2)],
      // }));

      setOrder(prevPizzaOrder => ({
        ...prevPizzaOrder,
        cheese: [...prevPizzaOrder.cheese.filter(el => !selected.includes(el))],
      }));
    }
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
      {/* <PizzaIngredient
        legend='Добавьте сыр'
        data={pizzaCheese}
        selectCheese={selectCheese}
      /> */}
      <fieldset style={ingredientTempStyles.block}>
        <legend>'Добавьте сыр'</legend>
        <div style={ingredientTempStyles.checks}>
          {pizzaCheese.map(({ value, name, url, price }) => (
            <>
              <CheckboxField
                key={name}
                value={value}
                price={price}
                name={name}
                url={url}
                selectCheese={selectCheese}
              />
            </>
          ))}
        </div>
      </fieldset>
      {/* <PizzaIngredient legend='Добавьте овощи' data={pizzaVegetables} />
      <PizzaIngredient legend='Добавьте мясо' data={pizzaMeat} /> */}

      <button>Заказать за {pizzaPrice} рублей</button>
    </section>
  );
};
