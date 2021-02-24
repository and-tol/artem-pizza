import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as IncArrowLeft } from '../../asserts/icons/icn_arrow-left.svg';
// Image
import { ReactComponent as IncLogout } from '../../asserts/icons/icn_logout.svg';
// Actions
import { loginReducer } from '../../pages/LoginPage/state';
import { ordersListReducer } from '../../pages/OrdersListPage/state';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const H1 = styled.h1`
  margin: 0;
`;

const ButtonLeft = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px;

  margin-right: 16px;
  margin-left: 8px;

  text-decoration: none;
  color: var(--gray600);
  font-weight: 800;
  cursor: pointer;
  :hover {
    color: var(--gray400);
  }

  @media (min-width: 960px) {
    margin-right: 16px;
    margin-left: 16px;

    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 480px) {
    span {
      display: none;
    }
  }
  span {
    margin-left: 10px;
  }
`;

const ButtonRight = styled(ButtonLeft)`
  margin-right: 8px;
  margin-left: 16px;

`;

const IncLogoutStyled = styled(IncLogout)``;

export const HeaderGeneral = ({ history, title }) => {
  const dispatch = useDispatch();

  const goBack = () => {
    history.goBack();
  };
  const logout = () => {
    dispatch(loginReducer.actions.userLogout());
    dispatch(ordersListReducer.actions.ordersClear());
    history.push('/');
  };

  return (
    <Container>
      <ButtonLeft onClick={goBack}>
        <IncArrowLeft />
        <span>Назад</span>
      </ButtonLeft>
      <H1>{title}</H1>
      <ButtonRight onClick={logout}>
        <IncLogoutStyled />
        <span>Выйти</span>
      </ButtonRight>
    </Container>
  );
};

HeaderGeneral.propTypes = {
  title: PropTypes.string,
  history: PropTypes.object.isRequired,
};
