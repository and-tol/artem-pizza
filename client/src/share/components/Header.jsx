import PropTypes from 'prop-types';
import styled from 'styled-components';
// Styles
import { StyledWrapper } from '../styled-components/StyledWrapper';

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 0px 2px 0px rgba(46, 49, 55, 0.15),
    0px 3px 4px 0px rgba(46, 49, 55, 0.05);
`;

const Wrapper = styled(StyledWrapper)`
  min-height: 56px;
  padding: 8px;
  @media (min-width: 960px) {
    padding: 16px;
    min-height: 80px;
  }
`;

export const Header = ({ children }) => {
  return (
    <HeaderStyled>
      <Wrapper>{children}</Wrapper>
    </HeaderStyled>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};
