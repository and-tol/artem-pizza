import styled from 'styled-components';

export const InputGroupContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: 2px;
  border-radius: 12px;
  background: var(--gray100);
  overflow-x: auto;
  @media (min-width: 960px) {
    border-radius: 14px;
  }
`;
