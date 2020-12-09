import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { CheckboxGroup } from './CheckboxGroup';

const register = jest.fn();

describe('CheckboxGroup', () => {
  it('render correctly', () => {
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

  it('calls correct function on click', () => {
    const { getByLabelText } = render(
      <CheckboxGroup
        legend='Добавьте мясо'
        register={register}
        name='test3'
        options={{
          test1: { name: 'test2', price: 1 },
          test3: { name: 'test4', price: 1 },
        }}
      />
    );

    fireEvent.click(getByLabelText('test4'));

    expect(register).toHaveBeenCalled();
  });
});
