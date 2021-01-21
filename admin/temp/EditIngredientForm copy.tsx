import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as yup from 'yup';
import { api } from '../src/api';
// Type
import { Ingredient } from '../src/types';
// Style
import {
  Typography,
  TextField,
  Input,
  InputLabel,
  FormControl,
} from '@material-ui/core';

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

export const EditIngredientForm = ({
  editingIngredient,
  ingredient,
  ingredientId,
  setIsCancel,
  setIsEditing,
}: EditIngredientFormProps) => {
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
    <>
      <Typography variant='h5'>
        Редактируем ингредиент {editingIngredient}
      </Typography>
      <form onSubmit={onSubmit}>
        {/* <div> */}
          <FormControl>
            <label htmlFor='name'>
              Название ингредиента. (Будет показано пользователю)
              <Controller
                as={Input}
                id='name'
                name='name'
                control={control}
                defaultValue={ingredient.name}
                required
                fullWidth
              />
            </label>
            <div>{errors.name?.message}</div>
          </FormControl>

          {/* <label htmlFor='name'> */}
            {/* Название ингредиента. (Будет показано пользователю) */}
            {/* <input
              ref={register}
              id='name'
              type='text'
              name='name'
              defaultValue={ingredient.name}
            /> */}
          {/* </label> */}
        {/* </div> */}
        <div>
          <label htmlFor='slug'>
            Идентификатор ингредиента
            <input
              ref={register}
              id='slug'
              type='text'
              name='slug'
              defaultValue={ingredient.slug}
            />
            <div>{errors.slug?.message}</div>
          </label>
        </div>
        <div>
          <label htmlFor='price'>
            Цена ингредиента
            <input
              ref={register}
              id='price'
              type='tel'
              name='price'
              defaultValue={ingredient.price}
            />
            <div>{errors.price?.message}</div>
          </label>
        </div>
        <div>
          <label htmlFor='category'>
            Категория ингредиента
            <select
              id='category'
              ref={register}
              name='category'
              defaultValue={currentCategory}
            >
              <option value='size'>Размер</option>
              <option value='dough'>Тесто</option>
              <option value='sauce'>Соус</option>
              <option value='cheese'>Сыр</option>
              <option value='vegetables'>Овощ</option>
              <option value='meat'>Мясо</option>
            </select>
            <div>{errors.category?.message}</div>
          </label>
        </div>
        <div>
          <label htmlFor='image'>
            Изображение ингредиента
            <input id='image' ref={register} type='file' name='image' />
          </label>
          <div>{errors.image?.message}</div>
        </div>
        <div>
          <label htmlFor='thumbnail'>
            Уменьшенное изображение ингредиента
            <input id='thumbnail' ref={register} type='file' name='thumbnail' />
          </label>
          <div>{errors.thumbnail?.message}</div>
        </div>
        {/* {!serverResponse?.ok && <div>Не хватает данных</div>} */}
        <button>Отправить</button>
      </form>
    </>
  );
};
