import React from 'react';
import { Link } from 'react-router-dom';
import { book } from '../../../temp/book';

export const SignupPage = () => {
  return (
    <>
      <h1>Страница регистрации</h1>
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
        <button>Зарегистрироваться</button>
        <Link to={book.login.url}>На страницу Входа в приложение (Логина) </Link>
      </form>
    </>
  );
};
