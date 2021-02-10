import { render } from '@testing-library/react';
import React from 'react';
import { CheckboxGroup } from './CheckboxGroup';

const register = jest.fn();

describe('CheckboxGroup', () => {
  it('renders correctly', () => {
    const { getByRole } = render(
      <CheckboxGroup
        legend='Добавьте мясо'
        register={register}
        name='test2'
        options={{
          bacon: { name: 'test1', price: 1 },
        }}
      />
    );

    expect(getByRole('checkbox')).toBeInTheDocument();
  });
});
