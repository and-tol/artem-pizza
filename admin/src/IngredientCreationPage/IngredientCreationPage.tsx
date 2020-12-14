import React from 'react';
import { useForm } from 'react-hook-form';

type Ingredient = {
  name: string;
  slug: string;
  price: string;
  category: string;
  image: File;
};

export const IngredientCreationPage = () => {
  const { register, handleSubmit } = useForm<Ingredient>();

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>
            Название ингредиента. (Будет показано пользователю)
            <input id='name' ref={register} type='text' name='name' />
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
            <input id='price' ref={register} type='tel' name='price' />
          </label>
        </div>
        <div>
          <label htmlFor='picture'>
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
          <label htmlFor='picture'>
            Изображение ингредиента
            <input ref={register} type='file' name='picture' />
          </label>
        </div>
        <button>Отправить</button>
      </form>
    </>
  );
};
