import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { CheckboxGroup } from './CheckboxGroup';

describe('CheckboxGroup', () => {
  it('render correctly', () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <CheckboxGroup
        legend='Добавьте мясо'
        onChange={onChange}
        isSelected={[]}
        options={{
          bacon: { name: 'test1', price: 1 },
        }}
      />
    );

    expect(getByRole('checkbox')).toBeInTheDocument();
  });

  it('checkbox was checked', () => {
    // Arrange
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <CheckboxGroup
        legend='Добавьте мясо'
        onChange={onChange}
        isSelected={['test3']}
        options={{
          test1: { name: 'test2', price: 1 },
          test3: { name: 'test4', price: 1 },
        }}
      />
    );

    // Assert
    expect(getByLabelText('test4')).toBeChecked();
  });
  it('calls correct function on click', () => {
    // Arrange
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <CheckboxGroup
        legend='Добавьте мясо'
        onChange={onChange}
        isSelected={['test3']}
        options={{
          test1: { name: 'test2', price: 1 },
          test3: { name: 'test4', price: 1 },
        }}
      />
    );
    // Act
    fireEvent.click(getByLabelText('test4'));
    // Assert
    expect(onChange).toHaveBeenCalled();
  });
});
