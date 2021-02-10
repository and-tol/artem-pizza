import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as IncError } from '../../../asserts/icons/icn_error.svg';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const H1 = styled.h1`
  margin: 0;
  margin-left: 16px;
  @media (min-width: 960px) {
    margin-left: auto;
  }
`;
const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px;
  margin-right: 8px;
  @media (min-width: 960px) {
    margin-right: 16px;
    margin-left: auto;
  }
`;

export const HeaderCheckoutPage = () => {
  return (
    <Container>
      <H1>Оформление заказа</H1>
      <LinkStyled to='/'>
        <IncError />
      </LinkStyled>
    </Container>
  );
};
