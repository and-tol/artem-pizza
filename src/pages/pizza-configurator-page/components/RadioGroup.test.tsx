import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { RadioGroup } from './RadioGroup';

describe('RadioGroup', () => {
  it('renders correctly', () => {
    // Arrange
    const onChange = jest.fn();
    const { getByRole } = render(
      <RadioGroup
        legend='Тест'
        name='test'
        onChange={onChange}
        isSelected='test2'
        options={{ thin: { name: 'Тонкое' } }}
      />
    );

    expect(getByRole('radio')).toBeInTheDocument();
  });

  it('checked default radiobutton', () => {
    // Arrange
    const onChange = jest.fn();
    render(
      <RadioGroup
        legend='Тест'
        name='test'
        onChange={onChange}
        isSelected='thin'
        options={{
          thin: { name: 'Тонкое' },
          puffy: { name: 'Пышное' },
        }}
      />
    );

    const radiobutton = screen.getByRole('radio', { checked: true });

    expect(radiobutton).toBeInTheDocument();
  });

  it('calls correct function on click', () => {
    // Arrange
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <RadioGroup
        legend='Тест'
        name='test'
        onChange={onChange}
        isSelected='thin'
        options={{
          thin: { name: 'Тонкое' },
          puffy: { name: 'Пышное' },
        }}
      />
    );

    // Act
    fireEvent.click(getByLabelText('Пышное'));

    // Assert
    expect(onChange).toHaveBeenCalled();
  });
});
