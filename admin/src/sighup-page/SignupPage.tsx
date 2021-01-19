import { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import * as yup from 'yup';
// Api
import { api } from '../api';
// Styles
import {
  Grid,
  Typography,
  FormControl,
  Button,
  Input,
  FormLabel,
} from '@material-ui/core';
import { useFormStyles } from '../shared/style/useFormStyles';

const schema = yup.object().shape({
  email: yup.string().email().required('Почта - обязательное поле'),
  password: yup
    .string()
    .min(6, 'Слишком короткий')
    .required('Пароль - обязательное поле'),
});

export const SignupPage = () => {
  const styles = useFormStyles();

  const {} = useMutation((data)=>api.)

  const [state, setState] = useState<{ [x: string]: string }>({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);

    setState({
      email: '',
      password: '',
    });
  };

  return (
    <Grid container component='section' justify='center'>
      <Typography variant='h3'>Регистрация пользователя</Typography>
      <Grid container justify='center'>
        <form onSubmit={handleSubmit}>
          <Grid container justify='center' direction='column'>
            <FormControl className={styles.formControl}>
              <FormLabel htmlFor='email'>Электронная почта </FormLabel>
              <Input
                id='email'
                type='text'
                name='email'
                value={state.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl className={styles.formControl}>
              <FormLabel htmlFor='password'>Пароль </FormLabel>
              <Input
                id='password'
                type='text'
                name='password'
                value={state.password}
                onChange={handleInputChange}
              />
            </FormControl>
            <Button type='submit' variant='outlined'>
              Зарегистрироваться
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
