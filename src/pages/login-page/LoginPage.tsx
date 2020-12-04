import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

type Profile = {
  email: string;
  password: string;
};

let isDisabled = true;

export const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm<Profile>();

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  console.log(errors)
  return (
    <>
      <h1>Авторизация</h1>
      <form onSubmit={onSubmit}>
        <fieldset>
          <label htmlFor='email'>
            Э-почта
            <input
              id='email'
              ref={register({ required: true })}
              type='text'
              name='email'
            />
            {/* {errors.email?.type === 'required' && <div>Это обязательное поле</div>} */}
          </label>
          <label htmlFor='password'>
            Пароль
            <input
              id='password'
              ref={register({ required: true })}
              type='password'
              name='password'
            />
            {/* {errors.password?.type === 'required'  && <div>Это обязательное поле</div>} */}
          </label>
        </fieldset>
        <button type='submit' disabled={isDisabled}>
          Войти
        </button>
        <Link to='/signup'>На страницу Регистрации </Link>
      </form>
    </>
  );
};
