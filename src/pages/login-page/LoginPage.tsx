import React from 'react';
import { Link } from 'react-router-dom';
import { book } from '../../../temp/book';

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
        <Link to={book.signup.url}>На страницу Регистрации </Link>
      </form>
    </>
  );
};
