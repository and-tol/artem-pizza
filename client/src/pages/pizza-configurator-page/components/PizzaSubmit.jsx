import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ButtonPrimary } from '../../../share/styled-components/Button'

const Button = styled(ButtonPrimary)`
  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const PizzaSubmit = ({ totalPrice }) => {
  return <Button>Заказать за {totalPrice}руб.</Button>;
};

PizzaSubmit.propTypes = {
  totalPrice: PropTypes.number,
};
