import { mockState } from '../../../testUtils/mockState';
import {
  getIngredients,
  getIngredientsByCategory,
} from './ingredientsSelectors';

describe('.getIngredients', () => {
  it('return data of ingredients from store', () => {
    expect(getIngredients(mockState)).toEqual([
      {
        id: 'mock_id_1',
        name: 'mock_name_1',
        slug: 'mock_slug_1',
        price: 1,
        category: 'mock_category_1',
        image: 'mock_image_1',
        thumbnail: 'mock_thumbnail_1',
      },
      {
        id: 'mock_id_2',
        name: 'mock_name_2',
        slug: 'mock_slug_2',
        price: 2,
        category: 'mock_category_2',
        image: 'mock_image_2',
        thumbnail: 'mock_thumbnail_2',
      },
    ]);
  });
});

describe('.getIngredientsByCategory', () => {
  it('return ingredients by category', () => {
    expect(getIngredientsByCategory('mock_category_1')(mockState)).toEqual([
      {
        id: 'mock_id_1',
        name: 'mock_name_1',
        slug: 'mock_slug_1',
        price: 1,
        category: 'mock_category_1',
        image: 'mock_image_1',
        thumbnail: 'mock_thumbnail_1',
      },
    ]);
  });
});
