import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../api';
// Type
import { NewIngredient } from '../types';

export const IngredientCreationPage = () => {
  const form = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(form.current!);

    const response = api.ingredients.createNewIngredient(formData);
  };

  return (
    <>
      <form ref={form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>
            Название ингредиента. (Будет показано пользователю)
            <input id='name' type='text' name='name' />
          </label>
        </div>
        <div>
          <label htmlFor='asc'>
            Идентификатор ингредиента
            <input type='text' name='slug' />
          </label>
        </div>
        <div>
          <label htmlFor='price'>
            Цена ингредиента
            <input id='price' type='tel' name='price' />
          </label>
        </div>
        <div>
          <label htmlFor='picture'>
            Категория ингредиента
            <select name='category'>
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
            <input type='file' name='picture' />
          </label>
        </div>
        <button>Отправить</button>
      </form>
    </>
  );
};
