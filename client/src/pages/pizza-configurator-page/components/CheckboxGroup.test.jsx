import { render } from '@testing-library/react';
import React from 'react';
import { CheckboxGroup } from './CheckboxGroup';

const register = jest.fn();

describe('CheckboxGroup', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <CheckboxGroup
        legend='Добавьте мясо'
        register={register}
        name='test2'
        options={[
          {
            id: 'test0',
            category: 'test2',
            name: 'test1',
            price: 1,
          },
        ]}
      />
    );

    expect(getByText(/Добавьте мясо/i)).toBeInTheDocument();
  });
  it.todo('renders  with options')
});
