import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { PizzaForm } from './PizzaForm';

const setPizza = jest.fn();

describe('PizzaForm', () => {
  it('renders correctly', () => {
    const { getByText } = render(<PizzaForm onPizzaCreated={setPizza} />);

    expect(getByText('Размер')).toBeInTheDocument();
  });
  describe('with all ingredients unchecked', () => {
    it('shows minimum price', () => {
      const { getByText } = render(<PizzaForm onPizzaCreated={setPizza} />);

      expect(getByText('Заказать за 200руб.')).toBeInTheDocument();
    });
  });
  describe('with all ingredients checked', () => {
    it('shows maximum price', () => {
      const { getByText } = render(<PizzaForm onPizzaCreated={setPizza} />);

      fireEvent.click(getByText('Моцарелла'));
      fireEvent.click(getByText('Чеддер'));
      fireEvent.click(getByText('Дор Блю'));

      fireEvent.click(getByText('Помидор'));
      fireEvent.click(getByText('Грибы'));
      fireEvent.click(getByText('Перец'));
      fireEvent.click(getByText('Ананасы'));
      fireEvent.click(getByText('Оливки'));
      fireEvent.click(getByText('Лук'));
      fireEvent.click(getByText('Брокколи'));

      fireEvent.click(getByText('Бекон'));
      fireEvent.click(getByText('Пепперони'));
      fireEvent.click(getByText('Ветчина'));

      expect(getByText('Заказать за 577руб.')).toBeInTheDocument();
    });
  });

});
