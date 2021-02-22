import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// Selectors
import { getUserStatus } from './state';
// Actions
import { loginReducer } from './state';
// Styles
import { ButtonPrimary, InputField } from '../../share/styled-components';
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

export const LoginPage = () => {
  const dispatch = useDispatch();
  const isUserRegistered = useSelector(getUserStatus);

  const { register, handleSubmit, errors, watch, isDirty } = useForm({
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
    /**
     * Set user registered
     */
    dispatch(loginReducer.actions.setUserStatus(true));
  });

  return (
    <>
      {isUserRegistered && <section>Добро пожаловать!</section>}
      {!isUserRegistered && (
        <Form onSubmit={onSubmit}>
          <Fieldset>
            <label htmlFor='email'>
              Э-почта
              <InputField id='email' ref={register} type='text' name='email' />
              <div>{errors.email?.message}</div>
            </label>
            <label htmlFor='password'>
              Пароль
              <InputField
                id='password'
                ref={register}
                type='password'
                name='password'
              />
              <div>{errors.password?.message}</div>
            </label>
          </Fieldset>
          <ButtonPrimary type='submit' disabled={isDisabled && !isDirty}>
            Войти
          </ButtonPrimary>
        </Form>
      )}
    </>
  );
};
