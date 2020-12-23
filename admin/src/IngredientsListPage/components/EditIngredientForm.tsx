import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useEffect } from 'react';
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
  image: yup.mixed().required('Картинка обязательна'),
});

type EditIngredientFormProps = {
  editingIngredient: string;
  ingredient: Ingredient;
  ingredientId: string;
  cancelEditingIngredient: () => void;
};

type EditIngredient = {
  formData: FormData;
  ingredientId: string;
};

export const EditIngredientForm = ({
  editingIngredient,
  ingredient,
  ingredientId,
  cancelEditingIngredient,
}: EditIngredientFormProps) => {
  const { register, handleSubmit, errors } = useForm<Ingredient>({
    resolver: yupResolver(schema),
  });

  const [currentCategory] = useState(ingredient.category);
  const [isEditing, setIsEditing] = useState(true);

  const {
    data: serverResponse,
    isError,
    isLoading,
    isSuccess,
    mutateAsync: editIngredient,
  } = useMutation(({ formData, ingredientId }: EditIngredient) =>
    api.ingredients.editIngredient(formData, ingredientId)
  );

  const onSubmit = handleSubmit(async data => {
    const { name, slug, price, category, image } = data;
    const formData = new FormData();

    formData.append('name', name);
    formData.append('slug', slug);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('image', image[0]);

    await editIngredient({ formData, ingredientId });
  });

  useEffect(() => {
    if (serverResponse?.ok) {
      const id = setTimeout(() => {
        setIsEditing(false);
      }, 10000);
      return () => clearTimeout(id);
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
      {isEditing && (
        <>
          <h3> Редактируем ингредиент {editingIngredient}</h3>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor='name'>
                Название ингредиента. (Будет показано пользователю)
                <input
                  ref={register}
                  id='name'
                  type='text'
                  name='name'
                  defaultValue={ingredient.name}
                />
                <div>{errors.name?.message}</div>
              </label>
            </div>
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
            <button>Отправить</button>
          </form>
          <button type='button' onClick={cancelEditingIngredient}>
            Отменить
          </button>
        </>
      )}
    </>
  );
};
