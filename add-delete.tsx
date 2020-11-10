const selectIngredient = (data, name: string, isChecked: boolean, ingredient): void => {

    const selected = [data.filter(el => el.name === name)[0].value];

    if (isChecked) {
      setOrder(prevPizzaOrder => ({
        ...prevPizzaOrder,
        [ingredient]: [...prevPizzaOrder[ingredient], ...selected],
      }));
    } else {
      setOrder(prevPizzaOrder => ({
        ...prevPizzaOrder,
        [ingredient]: [
          ...prevPizzaOrder[ingredient].filter(el => !selected.includes(el)),
        ],
      }));
    }
};


const deleteItem = (data: string[], value: string) => {
  const idx: number = data.findIndex(el => el === value);
  const newData = [...data.slice(0, idx), ...data.slice(idx + 1)];

  return newData;
};



  const selectCheese = (name: string, isChecked: boolean): void => {
    const selected = [pizzaCheese.filter(el => el.name === name)[0].value];
    const selected2 = pizzaCheese.filter(el => el.name === name)[0].value;

    console.log('isChecked>>>>', isChecked)

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
        cheese: [...prevPizzaOrder.cheese.filter(el =>