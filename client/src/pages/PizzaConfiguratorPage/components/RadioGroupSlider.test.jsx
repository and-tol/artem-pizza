import { render } from '@testing-library/react';
import React from 'react';
import { RadioGroupSlider } from './RadioGroupSlider';

const register = jest.fn();

describe('RadioGroupSlider', () => {
  it('renders correctly', () => {
    const { getByText, getByRole } = render(
      <RadioGroupSlider
        register={register}
        legend='Тест'
        name='test'
        options={[{ category: 'tomato', name: 'Томатный' }]}
      />
    );

    expect(getByText('Тест')).toBeInTheDocument();
    expect(getByRole('radiogroup')).toBeInTheDocument();
  });
});
