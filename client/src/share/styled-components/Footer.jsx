import styled from 'styled-components'
// Styles
const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 72px;
  padding: var(--padding-glob);
  background: #ffffff;
  box-shadow: 0px -16px 32px rgba(75, 75, 124, 0.05),
    0px 0px 4px rgba(75, 75, 124, 0.1);
  @media (min-width: 960px) {
    display: none;
  }
  margin: 0 calc(var(--padding-glob) * -1) calc(var(--padding-glob) * -1);
  position: fixed;
  z-index: 100;
  bottom: 16px;
`;

export const Footer = ({ children, ...args }) => {
  return <StyledFooter {...args}>{children}</StyledFooter>;
};
