import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ProductCreationPage } from './ProductCreationPage';

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <ProductCreationPage />
        </Route>
        <Route path='/login'></Route>
        <Route path='/register'></Route>
      </Switch>
      <form onSubmit={onSubmit}>
        <label htmlFor='price'>
          <input id='price' ref={register} type='tel' name='price' />
        </label>
        <label htmlFor='name'>
          <input id='name' ref={register} type='text' name='name' />
        </label>
        <label htmlFor='asc'>
          <input ref={register} type='text' name='asc' />
        </label>
        <label htmlFor='picture'>
          <input ref={register} type='file' name='picture' />
        </label>
        <button>Отправить</button>
      </form>
    </>
  );
}

export default App;
