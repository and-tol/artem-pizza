import styled from 'styled-components'

const Wrapper = ({ children, ...args }) => {
  return <div {...args}>{children}</div>;
};

export const StyledWrapper = styled(Wrapper)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 960px) {
    width: 960px;
  }
`;
