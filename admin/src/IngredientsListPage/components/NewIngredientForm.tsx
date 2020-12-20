import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';

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
  category: yup.string().required('Категория - обязательное поле'),
  image: yup.mixed().required('Картинка обязательна'),
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
    const { name, slug, price, category, image } = data;
    const formData = new FormData();

    formData.append('name', name);
    formData.append('slug', slug);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('image', image[0]);

    await createIngredient(formData);

    await cancelCreatingNewIngredient();
    await setIsAdding(true)
  });

  return (
    <>
      {isCreating && <h3> Создаем новый ингредиент (JSON)</h3>}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>
            Название ингредиента. (Будет показано пользователю)
            <input ref={register} id='name' type='text' name='name' />
            <div>{errors.name?.message}</div>
          </label>
        </div>
        <div>
          <label htmlFor='asc'>
            Идентификатор ингредиента
            <input ref={register} type='text' name='slug' />
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
            <select ref={register} name='category'>
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
            <input ref={register} type='file' name='image' />
            <div>{errors.image?.message}</div>
          </label>
        </div>
        <button>Отправить</button>
      </form>
    </>
  );
};
