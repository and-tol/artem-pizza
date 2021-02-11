import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// Api
import { api } from '../api';
// Types
import { User } from '../types';
// Styles
import {
  Grid,
  Typography,
  FormControl,
  Button,
  Input,
  FormLabel,
  Box,
} from '@material-ui/core';
import { useFormStyles } from '../shared/style/useFormStyles';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Неверный адрес электронной почты')
    .required('Почта - обязательное поле'),
  password: yup
    .string()
    .min(6, 'Слишком короткий пароль')
    .required('Пароль - обязательное поле'),
});

export const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const history = useHistory();
  const styles = useFormStyles();
  const { mutateAsync: loginUser } = useMutation((data: any) =>
    api.user.login(data)
  );
  const { handleSubmit, errors, control } = useForm<User>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async data => {
    const result = await loginUser(data);
    const token = await loginUser(data).then(token => token.json());

    if (result.status === 200) {
      history.push('/ingredients-list');
    }
    // TODO: если проверка не проходит повторная проверка
    if (result.status !== 200) {
      return <p>Попробуйте ещё раз</p>
    }
    // TODO: если пользователь не зарегистрирован -> переход на страницу регистрации
    if (false) {
      setIsSignup(true);
    }
  });

  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     history.push('/signup');
  //     setIsSignup(false);
  //   }, 1500);

  //   return () => {
  //     clearTimeout(id);
  //   };
  // });

  // const toRegistration = () => {
  //   history.push('/signup')
  // }

  return (
    <Grid container component='section' justify='center'>
      {isSignup && <div>Вы не зарегистрированы. Пройдите регистрацию</div>}
      <Typography variant='h3'>Регистрация пользователя</Typography>
      <Grid container justify='center'>
        <form onSubmit={onSubmit}>
          <Grid container justify='center' direction='column'>
            <FormControl className={styles.formControl}>
              <FormLabel htmlFor='email'>Электронная почта </FormLabel>
              <Controller
                as={<Input className={styles.input} error={!!errors.email} />}
                control={control}
                id='email'
                name='email'
              />
              {errors.email && (
                <Box className={styles.errorMessage}>
                  {errors.email?.message}
                </Box>
              )}
            </FormControl>
            <FormControl className={styles.formControl}>
              <FormLabel htmlFor='password'>Пароль </FormLabel>
              <Controller
                as={
                  <Input className={styles.input} error={!!errors.password} />
                }
                control={control}
                id='password'
                type='text'
                name='password'
              />
              {errors.password && (
                <Box className={styles.errorMessage}>
                  {errors.password?.message}
                </Box>
              )}
            </FormControl>
            <Button type='submit' variant='outlined'>
              Войти
            </Button>
          </Grid>
        </form>
      </Grid>
      {/* <Grid container justify='center'>
        <Button variant='outlined' onClick={toRegistration}>
          Зарегистрироваться
        </Button>
      </Grid> */}
    </Grid>
  );
};
