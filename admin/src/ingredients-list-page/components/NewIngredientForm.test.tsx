import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NewIngredientForm } from './NewIngredientForm';

const client = new QueryClient();

const setIsAdding = jest.fn();
const cancelCreatingNewIngredient = jest.fn();
const isCreating = true;

describe('NewIngredientForm', () => {
  it('renders correctly', () => {
    render(
      <QueryClientProvider client={client}>
        <NewIngredientForm
          isCreating={isCreating}
          cancelCreatingNewIngredient={cancelCreatingNewIngredient}
          setIsAdding={setIsAdding}
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
          <NewIngredientForm
            isCreating={isCreating}
            cancelCreatingNewIngredient={cancelCreatingNewIngredient}
            setIsAdding={setIsAdding}
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
          <NewIngredientForm
            isCreating={isCreating}
            cancelCreatingNewIngredient={cancelCreatingNewIngredient}
            setIsAdding={setIsAdding}
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
