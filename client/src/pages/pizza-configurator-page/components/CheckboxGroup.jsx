import { useEffect, useRef, useState, forwardRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as IconCheck } from '../../../asserts/icons/icn_check.svg';
// Styles
import { Legend } from '../../../share/styled-components/Legend';
const Fieldset = styled.fieldset`
  display: flex;
  flex-wrap: nowrap;
  color: var(--black);
  font-weight: 500;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 104px;
  height: 128px;
  @media (min-width: 960.5px) {
    width: 112px;
    height: 156px;
  }
  padding: 12px;
  display: block;
  width: 112px;
  height: 156px;
  background-color: #fff;
  border-radius: 12px;
  margin-left: 8px;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border: 2px solid transparent;
  transition: border 0.2s ease;
  border-radius: 12px;
  & + & {
    margin-left: 8px;
    @media (min-width: 960.5px) {
      margin-left: 16px;
    }
  }
  &:hover,
  &:active {
    border: 2px solid var(--primary);
    transition: border 0.2s ease;
  }
  div input:checked {
    border-color: var(--primary);
  }
  /* border-color: ${({ isSelected }) =>
    isSelected ? 'var(--primary)' : 'transparent'}; */
`;

const Image = styled.div`
  position: relative;
  display: block;
  width: 64px;
  height: 64px;
  background: paleturquoise;
  margin-bottom: 8px;
  @media (min-width: 960.5px) {
    margin-bottom: 12px;
  }
  top: -18.8px;
  @media (min-width: 960.5px) {
    top: -21.75px;
  }
  transform: translate3d(-50%, 0, 0);
  left: 50%;
`;

const LabelText = styled.p`
  display: block;
  margin-bottom: 8px;
  @media (min-width: 960.5px) {
    margin-bottom: 12px;
  }
`;
const PriceInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Price = styled.span`
  font-size: 16px;
`;
const Checkbox = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 2px solid var(--gray200);
  box-sizing: border-box;
  border-radius: 4px;
`;
const StyledIconCheck = styled(IconCheck)`
  display: none;
  position: relative;
  left: 1px;
`;
const Input = styled.input`
  &:hover + ${Label} div ${Checkbox} {
    border: 2px solid var(--primary);
    background-color: #fff;
  }
  &:checked + ${Label} {
    border: 2px solid var(--primary);
    transition: border 0.2s ease;
  }
  &:checked + ${Label} div ${Checkbox} {
    border: 2px solid transparent;
    background-color: var(--primary);
  }
  &:checked + ${Label} div ${StyledIconCheck} {
    display: block;
  }
`;

export const CheckboxGroup = ({ register, legend, options, name, values }) => {
  let selectedValues = [];
  const [selectedValue, setSelectedValue] = useState('');
  const handleOnChange = e => {
    const s = e.target.value;
    setSelectedValue(s);

    selectedValues.push(s);
    const index = selectedValues.indexOf(s);
    // console.log(index);
    // console.log(s);
  };

  const refa = useRef([]);

  // console.log('values checkbox>>>', values);

  return (
    <Fieldset>
      <Legend>{legend}</Legend>
      {Object.entries(options).map((option, i) => {
        return (
          <article>
            <Input
              id={option[1].id}
              ref={register}
              type='checkbox'
              name={name}
              value={option[1].slug}
              onChange={handleOnChange}
              hidden
            />
            <Label
              isSelected={selectedValue === option[1].slug}
              htmlFor={option[1].id}
              key={option[1].id}
              className={option[1].slug}
            >
              <Image />
              <LabelText>{option[1].name}</LabelText>
              <PriceInputContainer>
                <Price>{option[1].price}₽</Price>
                <Checkbox>
                  <StyledIconCheck fill='#fff' width='14' />
                </Checkbox>
              </PriceInputContainer>
            </Label>
          </article>
        );
      })}
    </Fieldset>
  );
};
