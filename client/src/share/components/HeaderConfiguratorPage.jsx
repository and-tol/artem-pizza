import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as IcnAccount } from '../../asserts/icons/icn_account.svg';
// Images
import { ReactComponent as NavbarBrand } from '../../asserts/NavbarBrand.svg';
// Hooks
import { useWindowDimensions } from '../hooks/useWindowDimentions';
import * as Button from '../styled-components/Button';

export const Styled = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 0px 2px 0px rgba(46, 49, 55, 0.15),
    0px 3px 4px 0px rgba(46, 49, 55, 0.05);
`;

const StyledIcnAccount = styled(IcnAccount)`
  margin-right: 9px;
`;

const StyledNavbarBrand = styled(NavbarBrand)`
  margin-left: 8px;
`;

export const HeaderConfiguratorPage = () => {
  const { width: windowWidth } = useWindowDimensions();
  return (
    <>
      <Link to='/'>
        <StyledNavbarBrand height={24} />
      </Link>
      {windowWidth <= 960 ? (
        <Link to='/login' style={{ padding: 13 }}>
          <IcnAccount />
        </Link>
      ) : (
        <Button.ButtonSecondary as='a' href='/login'>
          <StyledIcnAccount /> Личный кабинет
        </Button.ButtonSecondary>
      )}
    </>
  );
};
