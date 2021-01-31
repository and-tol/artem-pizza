import { Fragment } from 'react'
import styled from 'styled-components'
import { InputGroupContainer as SwitcherContainer } from '../../../share/styled-components/InputGroupContainer'
// Styles
import { Legend } from '../../../share/styled-components/Legend'


const Fieldset = styled.div`
  display: inline-block;
  & + & {
    @media (min-width: 480px) {
      margin-left: 36px;
    }
    @media (min-width: 960.5px) {
      margin-left: 16px;
    }
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 4px 12px;
  border-radius: 12px;
  background-color: transparent;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  @media (min-width: 960.5px) {
    padding: 4px 12px;
    font-size: 16px;
    line-height: 24px;
  }
`;
const Input = styled.input`
  &:checked + ${Label} {
    color: var(--black);
    background-color: #fff;
    font-weight: 500;
    box-shadow: var(--shadow);
    cursor: default;
    letter-spacing: -0.4px;
  }
`;

export const RadioGroupSwitcher = props => {
  const { legend, options, register, name } = props;

  return (
    <Fieldset>
      <Legend>{legend}</Legend>
      <SwitcherContainer>
        {Object.entries(options).map(option => (
          <Fragment key={option[1].id}>
            <Input
              id={option[1].id}
              ref={register}
              type='radio'
              name={name}
              value={option[1].slug}
              hidden
            />
            <Label htmlFor={option[1].id}>
              {option[1].name}
              {name === 'size' ? 'см' : null}
            </Label>
          </Fragment>
        ))}
      </SwitcherContainer>
    </Fieldset>
  );
};
