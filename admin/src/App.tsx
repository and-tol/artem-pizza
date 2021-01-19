import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import { IngredientsListPage } from './ingredients-list-page';
import { SignupPage } from './sighup-page';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <IngredientsListPage />
        </Route>
        <Route path='/login'></Route>
        <Route path='/signup'>
          <SignupPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
