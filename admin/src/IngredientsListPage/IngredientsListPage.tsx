import React, { useEffect, useState } from 'react';
// Api
import { api } from '../api';
// Types
import { Ingredient } from '../types';
import { EditIngredientForm } from './components/EditIngredientForm';
// Components
import { NewIngredientForm } from './components/NewIngredientForm';

export const IngredientsListPage = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  // const btnDelRef = useRef<HTMLButtonElement>(null);

  const [isCreating, setIsCreating] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  /**
   * Delete ingredient on server
   * @param e
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
  };
  const cancelCreatingNewIngredient = () => {
    setIsCreating(false);
  };

  /**
   * Ingredient editing
   */
  const [selectedId, setSelectedID] = useState<string | null>(null);
  const [isCancel, setIsCancel] = useState(false);
  const editIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.parentElement!.getAttribute('id');
    setSelectedID(id);
    setIsCancel(false);
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
      const ingredients = await api.ingredients
        .availableIngredients()
        .then(data => data.json());

      await setIngredients(ingredients);
    };

    getIngredients();
  }, []);

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
                <div key={ingredient.id} id={ingredient.id}>
                  <span>{ingredient.name}</span>
                  <button type='button' onClick={editIngredient}>
                    Редактировать
                  </button>
                  <button type='button' onClick={deleteIngredient}>
                    Удалить
                  </button>
                </div>
                {!isCancel && selectedId === ingredient.id ? (
                  <EditIngredientForm
                    editingIngredient={ingredient.name}
                    ingredient={ingredient}
                    ingredientId={selectedId}
                    cancelEditingIngredient={cancelEditingIngredient}
                    // isEditing={isEditing}
                  />
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
        {isCreating! && (
          <button type='button' onClick={cancelCreatingNewIngredient}>
            Отменить
          </button>
        )}
      </section>
    </>
  );
};
