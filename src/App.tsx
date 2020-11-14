import React from 'react';

// const pizza = {
//   size: ['30', '35'],
//   dough: ['Тонкое', 'Пышное'],
//   sauce: ['Томатный', 'Белый', 'Острый'],
//   ingredients: ['Моцарелла', 'Чеддер'],
// };

function App() {
  return (
    <>
      <form>
        <fieldset>
          <legend>Размер</legend>
          <label>
            <input type='radio' name='size' value='30' />
            30см
          </label>
          <label>
            <input type='radio' name='size' value='35' />
            35см
          </label>
        </fieldset>
        <fieldset>
          <legend>Тесто</legend>
          <label>
            <input type='radio' name='size' value='thin' />
            Тонкое
          </label>
          <label>
            <input type='radio' name='size' value='puffy' />
            Пышное
          </label>
        </fieldset>
        <fieldset>
          <legend>Соус</legend>
          <label>
            <input type='radio' name='size' value='tomato' />
            Томатный
          </label>
          <label>
            <input type='radio' name='size' value='white' />
            Белый
          </label>
          <label>
            <input type='radio' name='size' value='spicy' />
            Острый
          </label>
        </fieldset>
      </form>
    </>
  );
}

export default App;
