import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
// Actions
import * as loginActions from '../login-page/state/loginActions';
import { signupActions } from './state/signupActions';
// Selectors
import { getStatus } from './state/signupSelectors';

const schema = yup.object().shape({
  email: yup.string().email('Неверный адрес электронной почты'),
  password: yup
    .string()
    .min(6, 'Длина пароля должна быть не менее шести символов'),
});

/**
 * Component User registration page
 * Страница регистрации пользователя
 */
export const SignupPage = () => {
  const dispatch = useDispatch();

  const { register, watch, errors, handleSubmit } = useForm({
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
    dispatch(signupActions.fillUserData(data));

    // ! Авторизация (login) пользователя
    dispatch(loginActions.setUserStatus(true));
  });

  const isRegistered = useSelector(getStatus);

  return (
    <>
      <h1>Страница регистрации</h1>
      {isRegistered && <p>Регистрация прошла успешно</p>}
      {!isRegistered && <form onSubmit={onSubmit}>
        <fieldset>
          <label htmlFor='email'>
            Э-почта
            <input ref={register} id='email' type='text' name='email' />
            <div>{errors.email?.message}</div>
          </label>
          <label htmlFor='password'>
            Пароль
            <input
              ref={register}
              id='password'
              type='password'
              name='password'
            />
            <div>{errors.password?.message}</div>
          </label>
        </fieldset>
        <button type='submit' disabled={isDisabled}>
          Зарегистрироваться
        </button>
      </form>}
        <Link to='/login'>На страницу Входа в приложение (Логина) </Link>
    </>
  );
};
