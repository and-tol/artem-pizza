import PropTypes from 'prop-types';
import { Fragment } from 'react';
import styled from 'styled-components';
import { InputGroupContainer } from '../../../share/styled-components/InputGroupContainer';
// Styles
import { Legend } from '../../../share/styled-components/Legend';

const SliderContainer = styled(InputGroupContainer)`
  display: inline-flex;
  flex-wrap: nowrap;
  position: relative;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-right: calc(var(--padding-glob) * (-2));

  margin-bottom: 24px;

  @media (min-width: 960px) {
    background-color: #fff;
    border: none;
    flex-wrap: wrap;
    margin-bottom: calc(32px - 8px);
  }
`;
const SliderWrapper = styled.div`
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-right: calc(var(--padding-glob) * (-2));
  margin-left: calc(var(--padding-glob) * (-2));
  padding-left: calc(var(--padding-glob) * 2);
`;

const Slide = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 4px 12px;
  white-space: nowrap;
  background-color: transparent;
  cursor: pointer;
  transition: all var(--transition);
  @media (min-width: 960px) {
    border-radius: 12px;
    padding: 8px 16px;
    margin-bottom: 8px;
    border: 2px solid var(--gray200);
    margin-right: 8px;
  }
`;
const Input = styled.input`
  &:checked + ${Slide} {
    color: var(--black);
    background-color: #fff;
    font-weight: 500;
    box-shadow: var(--shadow);
    cursor: default;
    @media (min-width: 960px) {
      border-color: var(--primary);
    }
  }
`;

export const RadioGroupSlider = ({ register, legend, name, options }) => {
  return (
    <>
      <Legend>{legend}</Legend>
      <SliderWrapper>
        <SliderContainer role='radiogroup'>
          {Object.entries(options).map(option => (
            <Fragment key={option[1].id}>
              <Input
                id={option[1].slug}
                name={name}
                // ref={register}
                {...register(`${name}`)}
                type='radio'
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

RadioGroupSlider.propTypes = {
  register: PropTypes.func,
  legend: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
};
