import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';
// Styles
import { ButtonPrimary, InputField } from '../../share/styled-components';
// Actions
import { loginReducer } from '../LoginPage/state/loginReducer';
import { signupReducer } from './state/signupReducer';
// Selectors
import { getStatus } from './state/signupSelectors';
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  max-width: 600px;
`;
const Fieldset = styled.div`
  display: flex;
  flex-direction: column;
  label input {
    margin-top: 8px;
  }
`;

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
  const history = useHistory();

  const { register, watch, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const watchEmail = watch('email');
  const watchPassword = watch('password');
  const watchPasswordRepeat = watch('passwordRepeat');

  const [matchPasswords, setMatchPassword] = useState(false);

  useEffect(() => {
    if (watchPassword && watchPasswordRepeat) {
      if (watchPassword === watchPasswordRepeat) {
        setMatchPassword(true);
      }
    }
  }, [watchPassword, watchPasswordRepeat]);

  useEffect(() => {
    if (watchEmail && watchPassword) {
      setIsDisabled(false);
    }
  }, [watchEmail, watchPassword]);

  const onSubmit = handleSubmit(data => {
    dispatch(signupReducer.actions.fillUserData(data));

    // ! Авторизация (login) пользователя
    dispatch(loginReducer.actions.setUserStatus(true));

    history.push('/login');
  });

  const isRegistered = useSelector(getStatus);

  return <>
    {isRegistered && <p>Регистрация прошла успешно</p>}
    {!isRegistered && (
      <Form onSubmit={onSubmit}>
        <Fieldset>
          <label htmlFor='email'>
            Э-почта
            <InputField id='email' type='text' {...register('email')} />
            <div>{errors.email?.message}</div>
          </label>
          <label htmlFor='password'>
            Придумайте пароль
            <InputField id='password' type='password' {...register('password')} />
            <div>{errors.password?.message}</div>
          </label>
          <label htmlFor='password'>
            Повторите пароль
            <InputField id='passwordRepeat' type='password' {...register('passwordRepeat')} />
            {errors.passwordRepeat && (
              <div>{errors.passwordRepeat?.message}</div>
            )}
          </label>
        </Fieldset>
        <ButtonPrimary
          type='submit'
          disabled={isDisabled || !matchPasswords }
        >
          Зарегистрироваться
        </ButtonPrimary>
      </Form>
    )}
  </>;
};
