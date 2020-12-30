import React, { useEffect, useState } from 'react';
// Api
import { api } from '../api';
// Types
import { Ingredient } from '../types';
// Components
import { EditIngredientForm } from './components/EditIngredientForm';
import { NewIngredientForm } from './components/NewIngredientForm';

export const IngredientsListPage = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [selectedId, setSelectedID] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  /**
   * Delete ingredient on server
   */
  const deleteIngredient = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.parentElement!.getAttribute('id');
    await api.ingredients.deleteIngredient(id);
    const ingredients = await api.ingredients
      .availableIngredients()
      .then(data => data.json());

    setIngredients(ingredients);
  };
  const createNewIngredient = () => {
    setIsCreating(true);
    setIsShowing(false);
  };

  /**
   * Cancel Creating New Ingredient
   */
  const cancelCreatingNewIngredient = () => {
    setIsCreating(false);
  };

  /**
   * Show ingredient
   */
  const [isShowing, setIsShowing] = useState(false);
  const showIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.parentElement!.getAttribute('id');

    setSelectedID(id);
    setIsShowing(true);
    setIsCancel(true);
  };

  /**
   * Ingredient is editing
   */
  const [isCancel, setIsCancel] = useState(false);
  const [isEditing, setIsEditing] = useState(true);

  const editIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.parentElement!.getAttribute('id');

    setSelectedID(id);
    setIsCancel(false);
    setIsShowing(false);
    setIsEditing(true);
  };
  const cancelEditingIngredient = () => {
    setIsCancel(true);
  };
  useEffect(() => {
    let ingredients: Ingredient[] = [];
    const getIngredients = async () => {
      const result = await api.ingredients.availableIngredients();

      if (result) {
        ingredients = await result.json();
      }

      await setIngredients(ingredients);
    };

    getIngredients();
  }, [isCancel]);

  /**
   * Get all ingredients from the server at the first rendering
   */
  useEffect(() => {
    const getIngredients = async () => {
      try {
        const ingredients = await api.ingredients
          .availableIngredients()
          .then(data => data.json());

        await setIngredients(ingredients);
        await setIsLoading(false);
      } catch (err) {
        setIsError(true);
      }
    };

    getIngredients();
  }, []);

  /**
   * Get all ingredients when new ingredient has created
   */
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsAdding(false);
    }, 5000);

    let ingredients: Ingredient[] = [];
    const getIngredients = async () => {
      const result = await api.ingredients.availableIngredients();

      if (result) {
        ingredients = await result.json();
      }

      await setIngredients(ingredients);
    };

    getIngredients();

    setIsShowing(false);

    return () => clearTimeout(timeoutId);
  }, [isAdding]);

  return (
    <>
      <section>
        <h3>Доступные ингредиенты</h3>
        <p>
          {isLoading && <p>Загрузка данных с сервера...</p>}
          {isError && <p>Что-то пошло не так... Ошибка: err.message</p>}
          {ingredients.map(ingredient => {
            return (
              <>
                <div key={ingredient.id} id={ingredient.id}>
                  <span>{ingredient.name}</span>
                  <button type='button' onClick={showIngredient}>
                    Показать
                  </button>
                  <button type='button' onClick={editIngredient}>
                    Редактировать
                  </button>
                  <button type='button' onClick={deleteIngredient}>
                    Удалить
                  </button>
                </div>

                {isShowing && selectedId === ingredient.id ? (
                  <p>
                    {ingredient && (
                      <>
                        <div key={ingredient.id}>
                          <div>Название: {ingredient.name}</div>
                          <div>Цена: {ingredient.price}</div>
                          <div>Категория: {ingredient.category}</div>
                        </div>
                      </>
                    )}
                  </p>
                ) : null}

                {!isCancel && isEditing && selectedId === ingredient.id ? (
                  <>
                    <EditIngredientForm
                      editingIngredient={ingredient.name}
                      ingredient={ingredient}
                      ingredientId={selectedId}
                      setIsCancel={setIsCancel}
                      setIsEditing={setIsEditing}
                    />
                    <button type='button' onClick={cancelEditingIngredient}>
                      Отменить
                    </button>
                  </>
                ) : null}
              </>
            );
          })}
        </p>
      </section>

      <section>
        {!isCreating && (
          <button type='button' onClick={createNewIngredient}>
            Создать новый ингредиент
          </button>
        )}

        <p>
          {isCreating && (
            <NewIngredientForm
              isCreating={isCreating}
              cancelCreatingNewIngredient={cancelCreatingNewIngredient}
              setIsAdding={setIsAdding}
            />
          )}
          {isAdding && <p>Новый ингредиент успешно добавлен</p>}
        </p>
        {isCreating && (
          <button type='button' onClick={cancelCreatingNewIngredient}>
            Отменить
          </button>
        )}
      </section>
    </>
  );
};
