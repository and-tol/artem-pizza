import InputMask from 'react-input-mask';
import styled from 'styled-components';

export const InputMaskStyled = styled(InputMask)`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: #fff !important;
  border: 2px solid var(--gray200);
  border-radius: 8px;
  width: 100%;
  width: ${({ width }) => width}px;
  margin-right: ${({ margin }) => margin}px;
  margin-bottom: 16px;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--black);
  outline: transparent;
  &[placeholder] {
    text-overflow: ellipsis;
    color: var(--gray400);
    font-size: 16px;
    line-height: 24px;
    @media (min-width: 960px) {
      font-size: 20px;
    }
  }
  @media (min-width: 960px) {
    padding: 16px;
    margin-bottom: 24px;
  }

  &:focus::placeholder {
    color: transparent;
  }

  &:hover,
  &:focus {
    background-color: #fff;
    outline: transparent;
    border-color: var(--gray400);
  }
  &[name=${({ invalid }) => invalid}] {
    background-color: #fff !important;
    outline: transparent;
    border-color: var(--status-error);
    &:focus {
      background-color: #fff !important;
      outline: transparent;
      border-color: var(--gray400);
    }
  }
  &[name=${({ valid }) => valid}] {
    background-color: #fff !important;
    border-color: var(--primary);
  }

  text-align: center;

  /* &::placeholder {
    color: var(--gray100);
    font-size: 16px;
    line-height: 24px;
    @media (min-width: 960px) {
      font-size: 20px;
    }
  } */
  [maskPlaceholder] {
    color: var(--gray100);
    font-size: 16px;
    line-height: 24px;
    @media (min-width: 960px) {
      font-size: 20px;
    }
  }
`;
