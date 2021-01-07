import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RadioGroup } from './RadioGroup';

const register = jest.fn();

describe('RadioGroup', () => {
  it('renders correctly', () => {
    const { getByRole } = render(
      <RadioGroup
        register={register}
        legend='Тест'
        name='test'
        // FIXME: options={{ thin: { name: 'Тонкое' } }}
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
          // FIXME: thin: { name: 'Тонкое' },
          thin: { name: 'Тонкое' },
          puffy: { name: 'Пышное' },
        }}
      />
    );

    fireEvent.click(getByLabelText('Пышное'));

    expect(register).toHaveBeenCalled();
  });
});
