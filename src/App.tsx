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
            <input type='radio' name='size' value='thin' />
            30см
          </label>
          <label>
            <input type='radio' name='size' value='Puffy' />
            35см
          </label>
        </fieldset>
      </form>
    </>
  );
}

export default App;
