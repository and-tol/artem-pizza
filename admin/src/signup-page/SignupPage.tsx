import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
// Styles
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Typography,
} from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as yup from 'yup';
// Api
import { api } from '../api';
import { useFormStyles } from '../shared/style/useFormStyles';
// Types
import { User } from '../types';

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

export const SignupPage = () => {
  const history = useHistory();
  const styles = useFormStyles();
  const { mutateAsync: createUser } = useMutation((data: any) =>
    api.user.create(data)
  );
  const { handleSubmit, errors, control } = useForm<User>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async data => {
    await createUser(data);

    history.push('/ingredients-list');
  });

  return (
    <Grid container component='section' justify='center'>
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
              Зарегистрироваться
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
