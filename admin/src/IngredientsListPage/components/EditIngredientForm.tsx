import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
// Style
import {
  Container,
  Button,
  FormControl,
  Input,
  makeStyles,
  MenuItem,
  Select,
  Typography,
  Box,
} from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as yup from 'yup';
import { api } from '../../api';
// Type
import { Ingredient } from '../../types';
// Data
import { categories } from '../../data';

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

type EditIngredientFormProps = {
  editingIngredient: string;
  ingredient: Ingredient;
  ingredientId: string;
  setIsCancel: (v: boolean) => void;
  setIsEditing: (v: boolean) => void;
};

type EditIngredient = {
  formData: FormData;
  ingredientId: string;
};

const useStyles = makeStyles({
  root: { padding: '1rem', backgroundColor: '#f5f5f5' },
  h5: {
    marginBottom: '1.3rem',
    fontSize: '1.3rem',
    fontFamily: 'Roboto Slab',
  },
  formControl: {
    marginBottom: 12,
    paddingBottom: 12,
    width: '100%',
    color: '#757575',
    fontSize: '.9rem',
    // borderBottom: '1px solid #bdbdbd',
  },
  input: {
    marginTop: '0.4rem !important',
    color: '#424242',
    fontFamily: 'Roboto Slab',
  },
  errorMessage: {
    color: '#e53935',
    fontSize: '0.8rem',
    fontStyle: 'italic',
  },
  btnImg: {
    lineHeight: 1.25,
    fontSize: '0.75rem',
  },
});

export const EditIngredientForm = ({
  editingIngredient,
  ingredient,
  ingredientId,
  setIsCancel,
  setIsEditing,
}: EditIngredientFormProps) => {
  const styles = useStyles();
  const { register, handleSubmit, errors, control } = useForm<Ingredient>({
    resolver: yupResolver(schema),
  });
  const [currentCategory] = useState(ingredient.category);
  const {
    data: serverResponse,
    isError,
    isLoading,
    mutateAsync: editIngredient,
  } = useMutation(({ formData, ingredientId }: EditIngredient) =>
    api.ingredients.editIngredient(formData, ingredientId)
  );
  const onSubmit = handleSubmit(async data => {
    const { name, slug, price, category, image, thumbnail } = data;
    const formData = new FormData();

    console.log('data', data);

    formData.append('name', name);
    formData.append('slug', slug);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('image', image[0]);
    formData.append('thumbnail', thumbnail[0]);

    await editIngredient({ formData, ingredientId });
  });

  useEffect(() => {
    if (!serverResponse?.ok) {
      setIsEditing(true);
      setIsCancel(false);
    } else {
      setIsEditing(false);
      setIsCancel(true);
    }
  });

  if (isError) {
    return <p>Ошибка: что-то пошло не так...</p>;
  }

  if (isLoading) {
    return <p>Загрузка данных...</p>;
  }

  return (
    <Container className={styles.root}>
      <Typography variant='h5' className={styles.h5}>
        Редактируем ингредиент {editingIngredient}
      </Typography>

      <form onSubmit={onSubmit}>
        <FormControl className={styles.formControl}>
          <label htmlFor='name'>
            Название ингредиента. (Будет показано пользователю)
          </label>
          <Controller
            as={<Input className={styles.input} error={!!errors.name} />}
            id='name'
            name='name'
            control={control}
            defaultValue={ingredient.name}
            required
            fullWidth
          />
          {errors.name && (
            <Box className={styles.errorMessage}>{errors.name?.message}</Box>
          )}
        </FormControl>

        <FormControl className={styles.formControl}>
          <label htmlFor='slug'>Идентификатор ингредиента</label>
          <Controller
            as={<Input className={styles.input} error={!!errors.slug} />}
            id='slug'
            name='slug'
            control={control}
            defaultValue={ingredient.slug}
            required
            fullWidth
          />
          {errors.slug && <Box>{errors.slug?.message}</Box>}
        </FormControl>
        <FormControl className={styles.formControl}>
          <label htmlFor='price'>Цена ингредиента</label>
          <Controller
            as={<Input className={styles.input} error={!!errors.price} />}
            id='price'
            name='price'
            control={control}
            defaultValue={ingredient.price}
            required
            fullWidth
          />
          {errors.price && (
            <Box className={styles.errorMessage}>{errors.price?.message}</Box>
          )}
        </FormControl>
        <FormControl className={styles.formControl}>
          <label htmlFor='category'>Категория ингредиента</label>
          <Controller
            control={control}
            name='category'
            defaultValue={currentCategory}
            as={
              <Select id='category'>
                {categories.map(c => (
                  <MenuItem key={c.value} value={c.value}>
                    {c.name}
                  </MenuItem>
                ))}
              </Select>
            }
          />
          {errors.category && <Box>{errors.category?.message}</Box>}
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
        {/* {!serverResponse?.ok && <div>Не хватает данных</div>} */}

        <Button type='submit' variant='outlined' onClick={onSubmit}>
          Отправить
        </Button>
      </form>
    </Container>
  );
};
