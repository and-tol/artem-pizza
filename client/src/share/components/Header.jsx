import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as IcnAccount } from '../../asserts/icons/icn_account.svg'
// Images
import { ReactComponent as NavbarBrand } from '../../asserts/NavbarBrand.svg'
// Hooks
import { useWindowDimensions } from '../hooks/useWindowDimentions'
import * as Button from '../styled-components/Button'
// Styles
import { StyledWrapper } from '../styled-components/StyledWrapper'

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 0px 2px 0px rgba(46, 49, 55, 0.15),
    0px 3px 4px 0px rgba(46, 49, 55, 0.05);
`;

const WrapperHeader = styled(StyledWrapper)`
  min-height: 56px;
  padding: 8px;
  @media (min-width: 960px) {
    padding: 16px;
    min-height: 80px;
  }
`;

const StyledIcnAccount = styled(IcnAccount)`
  margin-right: 9px;
`;

const StyledNavbarBrand = styled(NavbarBrand)`
  margin-left: 8px;
`;

export const Header = () => {
  const {width: windowWidth } = useWindowDimensions();
  return (
    <StyledHeader>
      <WrapperHeader>
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
      </WrapperHeader>
    </StyledHeader>
  );
};
