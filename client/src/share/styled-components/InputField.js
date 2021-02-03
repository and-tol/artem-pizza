import styled from 'styled-components';

export const InputField = styled.input`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: #fff;
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
    outline: transparent;
    border-color: var(--gray400);
  }
  &[name=${({ invalid }) => invalid}] {
    outline: transparent;
    border-color: var(--status-error);
    &:focus {
      outline: transparent;
      border-color: var(--gray400);
    }
  }
  &[name=${({ valid }) => valid}] {
    border-color: var(--primary);
  }
`;
export const InputFieldwPlaceholder = styled(InputField)`
  ::placeholder {
    color: var(--gray600);
    font-size: 16px;
    line-height: 24px;
    @media (min-width: 960px) {
      font-size: 20px;
    }
  }
`;
