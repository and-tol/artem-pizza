import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { EditIngredientForm } from './EditIngredientForm';

const client = new QueryClient();

const setIsCancel = jest.fn();
const setIsEditing = jest.fn();

const ingredient = {
  id: 'idTest',
  name: 'nameTest',
  slug: 'slugTest',
  price: 20,
  category: 'categoryTest',
  image: 'imageTest',
};

describe('EditIngredientForm', () => {
  it('renders correctly', () => {
    render(
      <QueryClientProvider client={client}>
        <EditIngredientForm
          editingIngredient='slugTest'
          ingredient={ingredient}
          ingredientId='idTest'
          setIsCancel={setIsCancel}
          setIsEditing={setIsEditing}
        />
      </QueryClientProvider>
    );

    expect(screen.getByLabelText(/Название ингредиента/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText('Идентификатор ингредиента')
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Цена ингредиента')).toBeInTheDocument();
    expect(screen.getByLabelText('Категория ингредиента')).toBeInTheDocument();
    expect(
      screen.getByLabelText('Изображение ингредиента')
    ).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  describe('with invalid input data', () => {
    it('renders validation errors on blank required fields', async () => {
      render(
        <QueryClientProvider client={client}>
          <EditIngredientForm
            editingIngredient='slugTest'
            ingredient={{
              id: 'idTest',
              name: '',
              slug: '',
              price: '',
              category: '',
              image: '',
            }}
            ingredientId='idTest'
            setIsCancel={setIsCancel}
            setIsEditing={setIsEditing}
          />
        </QueryClientProvider>
      );

      await act(async () => {
        fireEvent.submit(screen.getByRole('button'));
      });

      expect(
        screen.getByText('Название - обязательное поле')
      ).toBeInTheDocument();
      expect(
        screen.getByText('Идентификатор - обязательное поле')
      ).toBeInTheDocument();
      expect(screen.getByText('Цена - обязательное поле')).toBeInTheDocument();
      // FIXME:
      // expect(screen.getByText('Картинка обязательна')).toBeInTheDocument();
    });

    it('renders validation error when price not number', async () => {
      render(
        <QueryClientProvider client={client}>
          <EditIngredientForm
            editingIngredient='slugTest'
            ingredient={ingredient}
            ingredientId='idTest'
            setIsCancel={setIsCancel}
            setIsEditing={setIsEditing}
          />
        </QueryClientProvider>
      );

      fireEvent.input(screen.getByLabelText(/Цена ингредиента/i), {
        target: { value: 'test' },
      });

      await act(async () => {
        fireEvent.submit(screen.getByRole('button'));
      });

      expect(screen.getByText('Цена должна быть числом')).toBeInTheDocument();
    });
  });
});
