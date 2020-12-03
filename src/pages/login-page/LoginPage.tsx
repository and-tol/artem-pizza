import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

type Profile = {
  login: string;
  password: string;
};

export const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm<Profile>();

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  return (
    <>
      <h1>Авторизация</h1>
      <form onSubmit={onSubmit}>
        <fieldset>
          <label>
            Э-почта
            <input
              ref={register({ required: true })}
              type='text'
              name='login'
            />
            {errors.login && <div>Неправильное имя пользователя</div>}
          </label>
          <label>
            Пароль
            <input
              ref={register({ required: true })}
              type='password'
              name='password'
            />
            {errors.password && <div>Неправильный пароль</div>}
          </label>

        </fieldset>
        <button>Войти</button>
        <Link to='/signup'>На страницу Регистрации </Link>
      </form>
    </>
  );
};
