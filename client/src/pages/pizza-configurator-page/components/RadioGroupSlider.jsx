import { Fragment } from 'react';
import styled from 'styled-components';
// Styles
import { Legend } from '../../../share/styled-components/Legend';
import { InputGroupContainer } from '../../../share/styled-components/InputGroupContainer';

const SliderContainer = styled(InputGroupContainer)`
  display: inline-flex;
  flex-wrap: nowrap;
  position: relative;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-right: -(var(--padding-glob));
  margin-bottom: 24px;
  @media (min-width: 960.5px) {
    margin-bottom: 32px;
  }
  @media (min-width: 960.5px) {
    background-color: #fff;
    border: none;
  }
`;
const SliderWrapper = styled.div`
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-right: -(var(--padding-glob));
`;

const Slide = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 4px 12px;
  white-space: nowrap;
  border-radius: 12px;
  background-color: transparent;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  transition: all var(--transition);
  @media (min-width: 960.5px) {
    padding: 4px 12px;
    font-size: 16px;
    line-height: 24px;
  }
`;
const Input = styled.input`
  &:checked + ${Slide} {
    color: var(--black);
    background-color: #fff;
    font-weight: 500;
    box-shadow: var(--shadow);
    cursor: default;
  }
`;

export const RadioGroupSlider = props => {
  const { register, legend, name, options } = props;

  return (
    <>
      <Legend>{legend}</Legend>
      <SliderWrapper>
        <SliderContainer>
          {Object.entries(options).map(option => (
            <Fragment key={option[1].id}>
              <Input
                id={option[1].slug}
                ref={register}
                type='radio'
                name={name}
                value={option[1].slug}
                hidden
              />
              <Slide as='label' htmlFor={option[1].slug}>
                {option[1].name}
                {name === 'size' ? ' см' : null}
              </Slide>
            </Fragment>
          ))}
        </SliderContainer>
      </SliderWrapper>
    </>
  );
};
