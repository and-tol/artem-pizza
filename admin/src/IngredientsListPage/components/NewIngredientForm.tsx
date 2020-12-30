import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as yup from 'yup';
import { api } from '../../api';
// Type
import { Ingredient } from '../../types';

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
  const { register, handleSubmit, errors } = useForm<Ingredient>({
    resolver: yupResolver(schema),
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
    <>
      {isCreating && <h3> Создаем новый ингредиент</h3>}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>
            Название ингредиента. (Будет показано пользователю)
            <input ref={register} id='name' type='text' name='name' />
            <div>{errors.name?.message}</div>
          </label>
        </div>
        <div>
          <label htmlFor='slug'>
            Идентификатор ингредиента
            <input ref={register} id='slug' type='text' name='slug' />
            <div>{errors.slug?.message}</div>
          </label>
        </div>
        <div>
          <label htmlFor='price'>
            Цена ингредиента
            <input ref={register} id='price' type='tel' name='price' />
            <div>{errors.price?.message}</div>
          </label>
        </div>
        <div>
          <label htmlFor='category'>
            Категория ингредиента
            <select id='category' ref={register} name='category'>
              <option value='sauces'>Соус</option>
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
        <button>Отправить</button>
      </form>
    </>
  );
};
