import React from 'react';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <>
      <h1>Страница входа в приложение</h1>
      <form>
        <fieldset>
          <label>
            Э-почта
            <input type='text' name='login' />
          </label>
          <label>
            Пароль
            <input type='password' name='password' />
          </label>
        </fieldset>
        <button>Авторизоваться</button>
        <Link to='/signup'>На страницу Регистрации </Link>
      </form>
    </>
  );
};
