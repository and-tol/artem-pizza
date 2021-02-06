import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
// Selectors
import { getUserStatus } from '../../pages/login-page/state/loginSelectors';
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
  cursor: pointer;
  :hover {
    color: var(--gray400);
  }
  @media (min-width: 960px) {
    margin-right: 16px;
    margin-left: 16px;

    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    span {
      margin-left: 10px;
    }
  }
`;

export const HeaderGeneral = ({ history, title }) => {
  const dispatch = useDispatch();
  const isUserRegistered = useSelector(getUserStatus);

  const goBack = () => {
    history.goBack();
  };
  const logout = () => {
    dispatch(loginReducer.actions.userLogout());
    history.push('/');
  }

  return (
    <Container>
      <Button onClick={goBack}>
        <IncArrowLeft /> <span>Назад</span>
      </Button>
      <H1>{title}</H1>
      <Button>
        <IncLogout onClick={logout} /> <span>Выйти</span>
      </Button>
    </Container>
  );
};
