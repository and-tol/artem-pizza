import styled from 'styled-components';

export const RadioGroupContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: 2px;
  border-radius: 12px;
  background: var(--gray100);
  overflow: auto;
  @media (min-width: 960.5px) {
    border-radius: 14px;
  }
`;
