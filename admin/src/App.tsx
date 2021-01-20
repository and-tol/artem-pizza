import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import { IngredientsListPage } from './ingredients-list-page';
import { LoginPage } from './login-page';
import { SignupPage } from './signup-page';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <LoginPage />
        </Route>
        <Route path='/ingredients-list'>
          <IngredientsListPage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/signup'>
          <SignupPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
