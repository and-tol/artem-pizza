import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormValues = {
  email: string | undefined;
  password: string | undefined;
};
const schema = yup.object().shape({
  email: yup
    .string()
    .email('Неверный адрес электронной почты')
    .required('Это обязательное поле'),
  password: yup
    .string()
    .min(6, 'Длина пароля должна быть не менее шести символов')
    .required('Это обязательное поле'),
});

export const LoginPage = () => {
  const { register, handleSubmit, errors, watch } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
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

  return (
    <>
      <h1>Авторизация</h1>
      <form onSubmit={onSubmit}>
        <fieldset>
          <label htmlFor='email'>
            Э-почта
            <input
              id='email'
              ref={register}
              type='text'
              name='email'
            />
            <div>{errors.email?.message }</div>
          </label>
          <label htmlFor='password'>
            Пароль
            <input
              id='password'
              ref={register}
              type='password'
              name='password'
            />
            <div>{errors.password?.message }</div>
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
