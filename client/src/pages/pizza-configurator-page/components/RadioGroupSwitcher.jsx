import { Fragment } from 'react';
import styled from 'styled-components';

const Fieldset = styled.fieldset`
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
const Legend = styled.legend`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 6px;
  @media (min-width: 960.5px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
  }
`;
const SwitcherContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: 2px;
  background: var(--gray100);
  border-radius: 12px;
  overflow: auto;
  @media (min-width: 960.5px) {
    border-radius: 14px;
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
  }
`;

export const RadioGroupSwitcher = props => {
  const { legend, options, register, name } = props;

  console.log(options);

  return (
    <>
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
    </>
  );
};
