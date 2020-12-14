import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { IngredientCreationPage } from './IngredientCreationPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <IngredientCreationPage />
        </Route>
        <Route path='/login'></Route>
        <Route path='/register'></Route>
      </Switch>
    </>
  );
}

export default App;
