import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// Actions
import { loginReducer } from '../../pages/login-page/state';
// Image
import { ReactComponent as IncLogout } from '../../asserts/icons/icn_logout.svg';
import { ReactComponent as IncArrowLeft } from '../../asserts/icons/icn_arrow-left.svg';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const H1 = styled.h1`
  margin: 0;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px;
  margin-right: 8px;
  margin-left: 16px;
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
  span {
    margin-left: 10px;
  }
`;

export const HeaderGeneral = ({ history, title }) => {
  const dispatch = useDispatch();

  const goBack = () => {
    history.goBack();
  };
  const logout = () => {
    dispatch(loginReducer.actions.userLogout());
    history.push('/');
  };

  return (
    <Container>
      <Button onClick={goBack}>
        <IncArrowLeft /> <span>Назад</span>
      </Button>
      <H1>{title}</H1>
      <Button onClick={logout}>
        <IncLogout /> <span>Выйти</span>
      </Button>
    </Container>
  );
};

HeaderGeneral.propTypes = {
  title: PropTypes.string,
  history: PropTypes.object.isRequired,
};
