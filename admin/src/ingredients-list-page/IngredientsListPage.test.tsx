import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { act } from 'react-test-renderer';
import { IngredientsListPage } from './ingredients-list-page';
import { api } from '../api';
import { Ingredient } from '../types';

const client = new QueryClient();

describe('IngredientsListPage', () => {
  it('renders correctly', () => {
    render(
      <QueryClientProvider client={client}>
        <IngredientsListPage />
      </QueryClientProvider>
    );

    expect(screen.getByText('Доступные ингредиенты')).toBeInTheDocument();
    expect(screen.getByText('Создать новый ингредиент')).toBeInTheDocument();
  });

  describe('.createNewIngredient', () => {
    it('renders correctly ingredient creating form', () => {
      render(
        <QueryClientProvider client={client}>
          <IngredientsListPage />
        </QueryClientProvider>
      );

      fireEvent.click(screen.getByText('Создать новый ингредиент'));

      expect(
        screen.queryByText('Создаем новый ингредиент')
      ).toBeInTheDocument();
    });
  });

  describe('.cancelCreatingNewIngredient', () => {
    it('disappearing form of creating a new ingredient', async () => {
      render(
        <QueryClientProvider client={client}>
          <IngredientsListPage />
        </QueryClientProvider>
      );
      await act(async () => {
        fireEvent.click(screen.getByText('Создать новый ингредиент'));
        fireEvent.click(screen.getByText('Отменить'));

        expect(
          screen.queryByText('Создаем новый ингредиент')
        ).not.toBeInTheDocument();
      });
    });
  });

  describe('if on the server have some data of the ingredients', () => {
    const result = [
      {
        id: '49idr5',
        name: 'Бекон',
        slug: 'bacon',
        price: 29,
        category: 'meat',
        image: 'bacon.npg',
        thumbnail: 'bacon.npg',
      },
    ];

    it('renders correctly', async () => {
      // FIXME: if on the server have some data of the ingredients renders correctly
      jest.mock('../api', () => ({
        ingredients: {
          availableIngredients: jest.fn().mockResolvedValue([
            {
              id: 'test1',
              name: 'test2',
              slug: 'test3',
              price: 'test4',
              category: 'test5',
              image: 'test6',
              thumbnail: 'trest7',
            },
          ]),
        },
      }));

      api.ingredients.availableIngredients();

      render(
        <QueryClientProvider client={client}>
          <IngredientsListPage />
        </QueryClientProvider>
      );

      screen.debug();
      await waitFor(() =>
        expect(screen.findByText('test2')).toBeInTheDocument()
      );
    });

    it.todo('delete ingredient with .deleteIngredient');

    it.todo('renders correctly form for ingredient editing');
  });
});
