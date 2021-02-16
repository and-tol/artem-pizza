<fieldset>
  <legend>Добавьте сыр</legend>
  <label>
    <input
      type='checkbox'
      value='mozarella'
      onChange={updateCheese}
      checked={cheese.includes('mozarella')}
    />
    Моцарелла
  </label>
  <label>
    <input
      type='checkbox'
      value='cheddar'
      onChange={updateCheese}
      checked={cheese.includes('cheddar')}
    />
    Чеддер
  </label>
  <label>
    <input
      type='checkbox'
      value='dorblue'
      onChange={updateCheese}
      checked={cheese.includes('dorblue')}
    />
    Дор Блю
  </label>
</fieldset>;
<fieldset>
  <legend>Добавьте овощи</legend>
  <label>
    <input
      type='checkbox'
      value='tomato'
      onChange={updateVegetables}
      checked={vegetables.includes('tomato')}
    />
    Помидор
  </label>
  <label>
    <input
      type='checkbox'
      value='mushrooms'
      onChange={updateVegetables}
      checked={vegetables.includes('mushrooms')}
    />
    Грибы
  </label>
  <label>
    <input
      type='checkbox'
      value='pepper'
      onChange={updateVegetables}
      checked={vegetables.includes('pepper')}
    />
    Перец
  </label>
  <label>
    <input
      type='checkbox'
      value='pineapple'
      onChange={updateVegetables}
      checked={vegetables.includes('pineapple')}
    />
    Ананасы
  </label>
  <label>
    <input
      type='checkbox'
      value='olives'
      onChange={updateVegetables}
      checked={vegetables.includes('olives')}
    />
    Оливки
  </label>
  <label>
    <input
      type='checkbox'
      value='onion'
      onChange={updateVegetables}
      checked={vegetables.includes('onion')}
    />
    Лук
  </label>
  <label>
    <input
      type='checkbox'
      value='broccoli'
      onChange={updateVegetables}
      checked={vegetables.includes('broccoli')}
    />
    Брокколи
  </label>
</fieldset>;
<fieldset>
  <legend>Добавьте мясо</legend>
  <label>
    <input
      type='checkbox'
      value='bacon'
      onChange={updateMeat}
      checked={meat.includes('bacon')}
    />
    Бекон
  </label>
  <label>
    <input
      type='checkbox'
      value='pepperoni'
      onChange={updateMeat}
      checked={meat.includes('pepperoni')}
    />
    Пепперони
  </label>
  <label>
    <input
      type='checkbox'
      value='ham'
      onChange={updateMeat}
      checked={meat.includes('ham')}
    />
    Ветчина
  </label>
</fieldset>;