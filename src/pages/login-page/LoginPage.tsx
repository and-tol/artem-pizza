import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

type Profile = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const { register, handleSubmit, errors, watch } = useForm<Profile>();
  const [isDisabled, setIsDisabled] = useState(true);

  const watchEmail = watch('email');
  const watchPassword = watch('password');

  useEffect(() => {
    if (watchEmail && watchPassword) {
      setIsDisabled(false);
    }
  }, [watchEmail, watchPassword]);

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  // console.log(errors)
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
          </label>
          <label htmlFor='password'>
            Пароль
            <input
              id='password'
              ref={register({ required: true })}
              type='password'
              name='password'
            />
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
