import { yupResolver } from '@hookform/resolvers/yup';
// Style
import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as yup from 'yup';
// Api
import { api } from '../../api';
// Data
import { categories } from '../../shared/pizzaData';
// Type
import { Ingredient } from '../../types';
import { useFormStyles } from '../../shared/style/useFormStyles';

const schema = yup.object().shape({
  name: yup.string().required('Название - обязательное поле'),
  slug: yup.string().required('Идентификатор - обязательное поле'),
  price: yup
    .number()
    .transform((cv, ov) => (ov === '' ? undefined : cv))
    .typeError('Цена должна быть числом')
    .required('Цена - обязательное поле'),
  // FIXME: do not show error text
  image: yup.mixed().required('Изображение обязательно'),
  thumbnail: yup.mixed().required('Уменьшенное изображение обязательно'),
});

type NewIngredientFormProps = {
  isCreating: boolean;
  cancelCreatingNewIngredient: () => void;
  setIsAdding: (v: boolean) => void;
};

export const NewIngredientForm = (props: NewIngredientFormProps) => {
  const { isCreating, cancelCreatingNewIngredient, setIsAdding } = props;
  const styles = useFormStyles();
  const { register, handleSubmit, errors, control } = useForm<Ingredient>({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const { mutateAsync: createIngredient } = useMutation((data: FormData) =>
    api.ingredients.createNewIngredient(data)
  );

  const onSubmit = handleSubmit(async data => {
    const { name, slug, price, category, image, thumbnail } = data;
    const formData = new FormData();

    formData.append('name', name);
    formData.append('slug', slug);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('image', image[0]);
    formData.append('thumbnail', thumbnail[0]);

    await createIngredient(formData);

    await cancelCreatingNewIngredient();
    await setIsAdding(true);
  });

  return (
    <Container className={styles.root}>
      {isCreating && (
        <Typography variant='h5' className={styles.h5}>
          Создаем новый ингредиент
        </Typography>
      )}

      <form onSubmit={onSubmit}>
        <FormControl className={styles.formControl}>
          <label htmlFor='name'>
            Название ингредиента. (Будет показано пользователю)
            <Controller
              as={<Input className={styles.input} error={!!errors.name} />}
              id='name'
              name='name'
              control={control}
              required
              fullWidth
            />
            {errors.name && (
              <Box className={styles.errorMessage}>{errors.name?.message}</Box>
            )}
          </label>
        </FormControl>
        <FormControl className={styles.formControl}>
          <label htmlFor='slug'>
            Идентификатор ингредиента
            <Controller
              as={<Input className={styles.input} error={!!errors.slug} />}
              id='slug'
              name='slug'
              control={control}
              required
              fullWidth
            />
            {errors.slug && (
              <Box className={styles.errorMessage}>{errors.slug?.message}</Box>
            )}
          </label>
        </FormControl>
        <FormControl className={styles.formControl}>
          <label htmlFor='price'>
            Цена ингредиента
            <Controller
              as={<Input className={styles.input} error={!!errors.price} />}
              id='price'
              name='price'
              control={control}
              required
              fullWidth
            />
            {errors.price && (
              <Box className={styles.errorMessage}>{errors.price?.message}</Box>
            )}
          </label>
        </FormControl>
        <FormControl className={styles.formControl}>
          <label htmlFor='category'>
            Категория ингредиента
            <Controller
              control={control}
              name='category'
              as={
                <Select id='category' className={styles.formSelect}>
                  {categories.map(c => (
                    <MenuItem key={c.value} value={c.value}>
                      {c.name}
                    </MenuItem>
                  ))}
                </Select>
              }
            />
            {errors.category && <Box>{errors.category?.message}</Box>}
          </label>
        </FormControl>
        <FormControl className={styles.formControl}>
          <Button
            component='label'
            variant='outlined'
            className={styles.btnImg}
          >
            Добавить изображение ингредиента
            <input
              id='image'
              name='image'
              ref={register}
              type='file'
              accept='.png'
              hidden
            />
          </Button>
          {errors.image && <Box>{errors.image?.message}</Box>}
        </FormControl>
        <FormControl className={styles.formControl}>
          <Button
            variant='outlined'
            component='label'
            className={styles.btnImg}
          >
            Добавить Уменьшенное изображение ингредиента
            <input
              id='thumbnail'
              ref={register}
              type='file'
              name='thumbnail'
              accept='.png'
              hidden
            />
          </Button>
          {errors.thumbnail && <Box>{errors.thumbnail?.message}</Box>}
        </FormControl>
        <Button type='submit' variant='outlined' onClick={onSubmit}>
          Отправить
        </Button>
      </form>
    </Container>
  );
};
