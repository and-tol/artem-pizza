import styled, { css } from 'styled-components';

const Button = ({ children, ...args }) => {
  return <button {...args}>{children}</button>;
};

export const ButtonPrimary = styled.button`
  background-color: var(--primary);
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  text-decoration: none;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  cursor: pointer;
  outline: transparent;
  &:hover {
    background-color: var(--primary-dark);
    box-shadow: var(--shadow);
  }
  &:active {
    background-color: var(--primary-dark);
    box-shadow: var(--shadow-inset);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: var(--gray200);
      color: var(--gray400);
      cursor: not-allowed;
    `}
`;

export const ButtonLarge = styled(ButtonPrimary)`
  font-size: 20px;
  padding: 16px 24px;
  border-radius: 18px;
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  background-color: #fff;
  border: 1px solid var(--gray200);
  color: var(--gray600);
  &:hover {
    background-color: var(--gray100);
  }
  &:active {
    background-color: var(--gray100);
  }
`;

export const ButtonSecondaryLarge = styled(ButtonSecondary)`
  font-size: 20px;
  padding: 16px 24px;
  border-radius: 18px;
`;
