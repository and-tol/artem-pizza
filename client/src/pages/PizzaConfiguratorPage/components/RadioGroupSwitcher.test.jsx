import { render } from '@testing-library/react';
import React from 'react';
import { RadioGroupSwitcher } from './RadioGroupSwitcher';

import { mockIngredients } from '../../../testUtils';

const register = jest.fn();

describe('RadioGroupSwitcher', () => {
  it('renders correctly', () => {
    const { getByText, getByRole } = render(
      <RadioGroupSwitcher
        register={register}
        legend='Тест'
        name='test0'
        options={mockIngredients}
      />
    );

    expect(getByText('Тест')).toBeInTheDocument();
    expect(getByRole('radiogroup')).toBeInTheDocument();
  });
});
