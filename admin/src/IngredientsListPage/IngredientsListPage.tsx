import React, { useEffect, useRef, useState } from 'react';
// Api
import { api } from '../api';
// Types
import { Ingredient } from '../types';
// Components
import { NewIngredientForm } from './components/NewIngredientForm';

export const IngredientsListPage = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const handleSetIsEditing = () => {
    setIsEditing(true);
  };
  const btnDelRef = useRef<HTMLButtonElement>(null);

  const [isCreating, setIsCreating] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  // Delete ingredient on server
  const deleteIngredient = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await api.ingredients.deleteIngredient(e.currentTarget.getAttribute('id'));
    const ingredients = await api.ingredients
      .availableIngredients()
      .then(data => data.json());

    setIngredients(ingredients);
  };

  const createNewIngredient = () => {
    setIsCreating(true);
  };
  const cancelCreatingNewIngredient = () => {
    setIsCreating(false);
  };

  // Get all ingredients on server
  useEffect(() => {
    const getIngredients = async () => {
      const ingredients = await api.ingredients
        .availableIngredients()
        .then(data => data.json());

      setIngredients(ingredients);
    };
    getIngredients();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsAdding(false);
    }, 5000);

    const addIngredient = async () => {
      const ingredients = await api.ingredients
        .availableIngredients()
        .then(data => data.json());

      await setIngredients(ingredients);
    };

    addIngredient();

    return () => clearTimeout(timeoutId);
  }, [isAdding]);

  return (
    <>
      <section>
        <h3>Доступные ингредиенты</h3>
        <p>
          {ingredients.map(ingredient => {
            return (
              <>
                <div key={ingredient.id}>
                  <span>{ingredient.name}</span>
                  <button type='button' onClick={handleSetIsEditing}>
                    Редактировать
                  </button>
                  <button
                    type='button'
                    id={ingredient.id}
                    onClick={deleteIngredient}
                  >
                    Удалить
                  </button>
                </div>
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
        {isCreating! && (
          <button type='button' onClick={cancelCreatingNewIngredient}>
            Отменить
          </button>
        )}
      </section>
    </>
  );
};
