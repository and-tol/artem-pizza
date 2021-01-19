import { useState, useEffect } from 'react';
// Api
import { api } from '../api';
// Styles
import { Grid, Typography, FormControl, Button } from '@material-ui/core';
import { useFormStyles } from '../shared/style/useFormStyles';

export const SignupPage = () => {
  const styles = useFormStyles();
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
  };

  return (
    <Grid container component='section' justify='center'>
      <Typography variant='h3'>Регистрация пользователя</Typography>
      <Grid container justify='center'>
        <form onSubmit={handleSubmit}>
          <Grid container justify='center' direction='column'>
            <FormControl
            className={styles.formControl}
            >
              <label htmlFor='email'>Электронная почта </label>
              <input
                id='email'
                type='text'
                name='email'
                value={state.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl
            className={styles.formControl}
            >
              <label htmlFor='password'>Пароль </label>
              <input
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
