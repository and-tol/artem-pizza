import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
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
  category: yup.string().required('Категория - обязательное поле'),
  picture: yup.mixed().required('Картинка обязательна'),
});

type NewIngredientFormProps = {
  isCreating: boolean;
};

export const NewIngredientForm = (props: NewIngredientFormProps) => {
  const { isCreating } = props;
  const form = useRef(null);
  const { register, handleSubmit } = useForm<Ingredient>();

  const onSubmit = handleSubmit(async data => {
    const { name, slug, price, category, image } = data;
    const formData = new FormData();

    formData.append('name', name);
    formData.append('slug', slug);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('image', image[0]);

    const response = await api.ingredients.createNewIngredient(formData);
  });

  return (
    <>
      {isCreating && <h3> Создаем новый ингредиент (JSON)</h3>}
      <form ref={form} onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>
            Название ингредиента. (Будет показано пользователю)
            <input ref={register} id='name' type='text' name='name' />
          </label>
        </div>
        <div>
          <label htmlFor='asc'>
            Идентификатор ингредиента
            <input ref={register} type='text' name='slug' />
          </label>
        </div>
        <div>
          <label htmlFor='price'>
            Цена ингредиента
            <input ref={register} id='price' type='tel' name='price' />
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
          </label>
        </div>
        <div>
          <label htmlFor='image'>
            Изображение ингредиента
            <input ref={register} type='file' name='image' />
          </label>
        </div>
        <button>Отправить</button>
      </form>
    </>
  );
};
