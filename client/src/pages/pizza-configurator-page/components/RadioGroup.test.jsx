import { render, screen } from '@testing-library/react';
import React from 'react';
import { RadioGroup } from './RadioGroup';

const register = jest.fn();

describe('RadioGroup', () => {
  it('renders correctly', () => {
    render(
      <RadioGroup
        register={register}
        legend='Тест'
        name='test'
        options={[{ slug: 'thin', name: 'Тонкое' }]}
      />
    );

    expect(screen.getByText('Тест')).toBeInTheDocument();
  });

  it.todo('renders with options')
});
