import React, { Fragment, useEffect, useState } from 'react';
// Api
import { api } from '../api';
// Types
import { Ingredient } from '../types';
// Components
import { EditIngredientForm } from './components/EditIngredientForm';
import { NewIngredientForm } from './components/NewIngredientForm';
// Styles
import {
  Container,
  ButtonGroup,
  Button,
  Grid,
  Box,
  CircularProgress,
  Typography,
  Paper,
} from '@material-ui/core';

export const IngredientsListPage = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [selectedId, setSelectedID] = useState<string | null>('');
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
   * Show/unshow ingredient
   */
  const [isShowing, setIsShowing] = useState(false);
  const showIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.parentElement!.getAttribute('id');

    setSelectedID(id);
    setIsShowing(true);
    setIsCancel(true);
  };
  const unshowIngredient = () => {
    setIsShowing(false);
  };

  /**
   * Ingredient is editing.
   * Show/hide form to editing ingredients
   */
  const [isCancel, setIsCancel] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const editIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.parentElement!.getAttribute('id');

    setSelectedID(id);
    setIsCancel(false);
    setIsShowing(false);
    setIsEditing(true);
  };

  const cancelEditingIngredient = () => {
    setIsCancel(true);
    setIsEditing(false);
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

  useEffect(() => {}, []);

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
      <Box component='section'>
        <Typography variant='h3' color='initial'>
          Доступные ингредиенты
        </Typography>

        <Grid container alignItems='center'>
          <Grid
            container
            direction='column'
            alignItems='center'
            justify='center'
          >
            {isLoading && <CircularProgress />}
            {isLoading && <p>Загрузка данных с сервера...</p>}
            {isError && <p>Что-то пошло не так... </p>}
          </Grid>
          {ingredients.map(ingredient => {
            return (
              <Fragment key={ingredient.id}>
                <Grid container justify='center'>
                  <Grid
                    container
                    direction='row'
                    justify='center'
                    alignItems='center'
                    spacing={3}
                  >
                    <Grid item sm={2}>
                      {ingredient.name}
                    </Grid>
                    <Grid item sm={4}>
                      <ButtonGroup
                        id={ingredient.id}
                        variant='text'
                        color='primary'
                        aria-label='outlined primary button group'
                      >
                        {!isShowing || !(selectedId === ingredient.id) ? (
                          <Button type='button' onClick={showIngredient}>
                            Показать
                          </Button>
                        ) : (
                          <Button type='button' onClick={unshowIngredient}>
                            Убрать
                          </Button>
                        )}
                        {isCancel || !(selectedId === ingredient.id) ? (
                          <Button
                            color='inherit'
                            type='button'
                            onClick={editIngredient}
                          >
                            Редактировать
                          </Button>
                        ) : (
                          <Button
                            color='inherit'
                            type='button'
                            onClick={cancelEditingIngredient}
                          >
                            Отменить
                          </Button>
                        )}
                        <Button
                          type='button'
                          color='secondary'
                          onClick={deleteIngredient}
                        >
                          Удалить
                        </Button>
                      </ButtonGroup>
                    </Grid>
                  </Grid>
                  {isShowing && selectedId === ingredient.id
                    ? ingredient && (
                        <Grid item sm={6}>
                          <Grid container justify='center' direction='column'>
                            <div>Название: {ingredient.name}</div>
                            <div>Цена: {ingredient.price} руб</div>
                            <div>Категория: {ingredient.category}</div>
                          </Grid>
                        </Grid>
                      )
                    : null}

                  {!isCancel && isEditing && selectedId === ingredient.id ? (
                    <Grid item sm={6}>
                      <Grid container justify='center' direction='column'>
                        <EditIngredientForm
                          editingIngredient={ingredient.name}
                          ingredient={ingredient}
                          ingredientId={selectedId}
                          setIsCancel={setIsCancel}
                          setIsEditing={setIsEditing}
                        />
                      </Grid>
                    </Grid>
                  ) : null}
                </Grid>
              </Fragment>
            );
          })}
        </Grid>
      </Box>

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
