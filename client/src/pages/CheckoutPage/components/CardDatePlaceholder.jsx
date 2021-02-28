import styled from 'styled-components';

export const CardDatePlaceholder = styled.div`
  display: inline-block;
  position: absolute;
  text-overflow: ellipsis;
  color: var(--gray400);
  font-size: 16px;
  line-height: 24px;
  @media (min-width: 960px) {
    font-size: 20px;
  }
`;
