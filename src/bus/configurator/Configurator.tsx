import React, { FC, useState } from 'react';
import { DEFAULT_PIZZA_ORDER, pizzaData, START_PRICE } from '../../pizzaData';
import { PizzaData, PizzaOrder } from '../../types';
import { CheckboxField, PizzaOption } from './components';

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

// const getPizzaPrice = (order: PizzaOrder, pizzaData: PizzaData) => {
//   let price = 0;
//   let price += pizzaData.pizzaSize.filter(el => el.value === order.size)[0].price;

//   return price;
// };

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

  const [order, setOrder] = useState<PizzaOrder>(DEFAULT_PIZZA_ORDER);

  // Order
  const [pizzaPrice, setPizzaPrice] = useState<number>(START_PRICE);

  // Pizza Size
  const [selectedValueSize, setValueSize] = useState<string>(
    pizzaSize[0].value
  );

  const onChangeValueSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValueSize(value);

    const selected = pizzaSize.filter(el => el.value === value)[0];
    setOrder({
      ...order,
      size: selected.value,
    });
  };

  // Pizza Dough
  const [selectedValueDough, setValueDough] = useState<string>(
    pizzaDough[0].value
  );

  const onChangeValueDough = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValueDough(value);

    const selected = pizzaDough.filter(el => el.value === value)[0];
    setOrder({
      ...order,
      dough: selected.value,
    });
  };

  // Pizza Sauce
  const [selectedValueSauce, setValueSauce] = useState<string>(
    pizzaSauce[0].value
  );

  const onChangeValueSauce = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValueSauce(value);

    const selected = pizzaSauce.filter(el => el.value === value)[0];
    setOrder({
      ...order,
      sauce: selected.value,
    });
  };
  // ======
  const selectedIngredient = (
    name: string,
    isChecked: boolean,
    price: number
  ) => {
    if (isChecked) {
      setOrder({
        ...order,
        ingredients: [...order.ingredients, name],
      });
    } else {
      setOrder({
        ...order,
        ingredients: [...order.ingredients.filter(el => !name.includes(el))],
      });
    }
  };

  console.log('order>>>>', order);

  return (
    <section>
      <PizzaOption
        key={'size'}
        legend='Размер'
        data={pizzaSize}
        selectedValue={selectedValueSize}
        nameGroup='size'
        onChangeValue={onChangeValueSize}
      />
      <PizzaOption
        key={'dough'}
        legend='Тесто'
        data={pizzaDough}
        selectedValue={selectedValueDough}
        nameGroup='dough'
        onChangeValue={onChangeValueDough}
      />
      <PizzaOption
        key={'sauce'}
        legend='Выберите соус'
        data={pizzaSauce}
        selectedValue={selectedValueSauce}
        nameGroup='sauce'
        onChangeValue={onChangeValueSauce}
      />

      <fieldset key={'cheese'} style={ingredientStyles.block}>
        <legend>'Добавьте сыр'</legend>
        <div style={ingredientStyles.checks}>
          {pizzaCheese.map(({ value, name, img, price }) => (
            <>
              <CheckboxField
                key={name}
                value={value}
                price={price}
                name={name}
                img={img}
                selectedIngredient={selectedIngredient}
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
