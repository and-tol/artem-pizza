import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
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
import { ReactComponent as IconCheck } from '../../asserts/icons/icn_check.svg';
// ! -----------
const StyledIconCheck = styled(IconCheck)`
  display: none;
  position: relative;
  left: 1px;
`;
const Label = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 24px;

  div input:checked {
    border-color: var(--primary);
  }
`;

const Checkbox = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 2px solid var(--gray200);
  box-sizing: border-box;
  border-radius: 4px;
  margin-right: var(--padding-glob);
`;
const Input = styled.input`
  &:hover + ${Label} ${Checkbox} {
    border: 2px solid var(--primary);
    background-color: #fff;
  }
  &:checked + ${Label} ${Checkbox} {
    border: 2px solid transparent;
    background-color: var(--primary);
  }
  &:checked + ${Label} ${StyledIconCheck} {
    display: block;
  }
`;
// ! ---------------

const Paragraf = styled.p`
  text-align: center;
  margin-bottom: 24px;
  margin-top: 24px;
`;
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
  const history = useHistory();

  const { register, handleSubmit, errors, watch, isDirty, setValue } = useForm({
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
     * Set user registered for demostration
     */
    dispatch(loginReducer.actions.setUserStatus(true));
    /**
     * Write flag, user & password to localStorage
     */
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('email', rememberMe ? email : '');
    localStorage.setItem('password', rememberMe ? password : '');
  });

  /**
   * Remember email & password for next input into personal cabinet
   */
  const [rememberMe, setRememberMe] = useState(false);
  const handleChangeRemember = () => {
    setRememberMe(!rememberMe);
  };
  useEffect(() => {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const email = rememberMe ? localStorage.getItem('email') : '';
    const password = rememberMe ? localStorage.getItem('password') : '';
    setValue('email', email);
    setValue('password', password);
  }, [setValue]);

  return (
    <>
      {isUserRegistered && (
        <section>
          <Paragraf>Добро пожаловать!</Paragraf>
          <ButtonPrimary
            type='button'
            onClick={() => {
              history.push('/orders-list');
            }}
          >
            Посмотреть мои заказы
          </ButtonPrimary>
        </section>
      )}
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
            <div>
              <Input
                id='rememberMe'
                // ref={register}
                onChange={handleChangeRemember}
                type='checkbox'
                name='rememberMe'
                // value='{option[1].slug}'
                hidden
              />
              <Label htmlFor='rememberMe'>
                <Checkbox>
                  <StyledIconCheck fill='#fff' width='14' />
                </Checkbox>
                Запомнить вас?
              </Label>
            </div>
          </Fieldset>
          <ButtonPrimary type='submit' disabled={isDisabled && !isDirty}>
            Войти
          </ButtonPrimary>
        </Form>
      )}
    </>
  );
};
