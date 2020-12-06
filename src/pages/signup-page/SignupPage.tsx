import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormValues = {
  email: string ;
  password: string ;
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

export const SignupPage = () => {
  const { register, watch, errors, handleSubmit } = useForm<FormValues>({
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
      <h1>Страница регистрации</h1>
      <form onSubmit={onSubmit}>
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
        <Link to='/login'>На страницу Входа в приложение (Логина) </Link>
      </form>
    </>
  );
};
