import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { IngredientsListPage } from './IngredientsListPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <IngredientsListPage />
        </Route>
        <Route path='/login'></Route>
        <Route path='/register'></Route>
      </Switch>
    </>
  );
}

export default App;
