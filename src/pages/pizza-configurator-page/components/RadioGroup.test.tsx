import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { RadioGroup } from './RadioGroup';

const register = jest.fn();

describe('RadioGroup', () => {
  it('renders correctly', () => {
    const { getByRole } = render(
      <RadioGroup
        register={register}
        legend='Тест'
        name='test'
        options={{ thin: { name: 'Тонкое' } }}
      />
    );

    expect(getByRole('radio')).toBeInTheDocument();
  });

  it('calls method register on click', () => {
    const { getByLabelText } = render(
      <RadioGroup
        register={register}
        legend='Тест'
        name='test'
        options={{
          thin: { name: 'Тонкое' },
          puffy: { name: 'Пышное' },
        }}
      />
    );

    fireEvent.click(getByLabelText('Пышное'));

    expect(register).toHaveBeenCalled();
  });
});
