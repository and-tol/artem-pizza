import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
// Selectors
import { getStatus } from './state/loginSelectors';
// Actions
import { loginReducer } from './state/loginReducer';

const schema = yup.object().shape({
  email: yup.string().email('Неверный адрес электронной почты'),
  password: yup
    .string()
    .min(6, 'Длина пароля должна быть не менее шести символов'),
});

export const LoginPage = () => {
  const dispatch = useDispatch();
  const isRegistered = useSelector(getStatus);

  const { register, handleSubmit, errors, watch } = useForm({
    resolver: yupResolver(schema),
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const email = watch('email');
  const password = watch('password');

  useEffect(() => {
    if (email && password) {
      setIsDisabled(false);
    }
  }, [email, password]);

  const onSubmit = handleSubmit(data => {
    dispatch(loginReducer.actions.fillUserData(data));
    // dispatch(loginActions.checkUserAsync(data));
    /**
     * Set user registered
     */
    dispatch(loginReducer.actions.setUserStatus(true));
  });

  return (
    <>
      <h1>Авторизация</h1>
      {isRegistered && <section>Добро пожаловать!</section>}
      {!isRegistered && (
        <form onSubmit={onSubmit}>
          <fieldset>
            <label htmlFor='email'>
              Э-почта
              <input id='email' ref={register} type='text' name='email' />
              <div>{errors.email?.message}</div>
            </label>
            <label htmlFor='password'>
              Пароль
              <input
                id='password'
                ref={register}
                type='password'
                name='password'
              />
              <div>{errors.password?.message}</div>
            </label>
          </fieldset>
          <button type='submit' disabled={isDisabled}>
            Войти
          </button>
          <Link to='/signup'>На страницу Регистрации </Link>
        </form>
      )}
    </>
  );
};
