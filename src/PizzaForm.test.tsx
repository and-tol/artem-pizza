import React from 'react';
import {
  fireEvent,
  getByText,
  render,
  queryByText,
} from '@testing-library/react';
import { PizzaForm } from './PizzaForm';

describe('PizzaForm', () => {
  it('renders correctly', () => {
    // Arrange
    const setPizza = jest.fn();
    const { getByText } = render(<PizzaForm onPizzaCreated={setPizza} />);
    // Act & Assert
    expect(getByText('Размер')).toBeInTheDocument();
    // TODO If split the form into separate components need to be tested yes/no needed fieldsets.
  });
  describe('with all ingredients unchecked', () => {
    it('shows minimum price', () => {
      // Arrange
      const setPizza = jest.fn();
      const { getByText } = render(<PizzaForm onPizzaCreated={setPizza} />);
      // Act & Assert
      expect(getByText('Заказать за 200руб.')).toBeInTheDocument();
    });
  });
  describe('with all ingredients checked', () => {
    it('shows maximum price', () => {
      // Arrange
      const setPizza = jest.fn();
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

      // Act & Assert
      expect(getByText('Заказать за 577руб.')).toBeInTheDocument();
    });
  });
  describe('on pizza submit ', () => {
    it('passes configurated pizza', () => {
      // Arrange
      const handleSubmit = jest.fn();

      const { getByText } = render(<PizzaForm onPizzaCreated={handleSubmit} />);
      // Act
      fireEvent.click(getByText('Моцарелла'));
      fireEvent.click(getByText('Помидор'));
      fireEvent.click(getByText('Бекон'));

      fireEvent.click(getByText('Заказать за 287руб.'));
      // Assert
      expect(handleSubmit).toBeCalledWith({
        cheese: ['mozarella'],
        dough: 'thin',
        meat: ['bacon'],
        sauce: 'tomato',
        size: '30',
        vegetables: ['tomato'],
      });
    });
  });
});