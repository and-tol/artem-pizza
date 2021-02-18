import PropTypes from 'prop-types';
import styled from 'styled-components';
// Helpers
import { uincID } from '../../../share/helpers';
// Images
import { serverImgs } from '../../../api/config';
import { ReactComponent as IconCheck } from '../../../asserts/icons/icn_check.svg';
// Styles
import { Legend } from '../../../share/styled-components/Legend';

const Fieldset = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 24px;
  color: var(--black);
  font-weight: 500;
  overflow-x: auto;
  padding-top: 4px;
  margin-top: -4px;
  padding-left: var(--padding-glob);
  &::-webkit-scrollbar {
    display: none;
  }
  margin-right: calc(var(--padding-glob) * (-2));
  margin-left: calc(var(--padding-glob) * (-2));
  &:first-child {
    margin-left: var(--padding-glob);
    @media (min-width: 960px) {
      margin-left: 0;
    }
  }
  @media (min-width: 960px) {
    padding-top: 8px;
    margin-top: -8px;
    flex-wrap: wrap;
    margin-bottom: 32px;
  }
`;
const Article = styled.article`
  position: relative;
  margin-right: 8px;

  @media (min-width: 960px) {
    margin-right: 16px;
    margin-bottom: 28px;
  }
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 104px;
  height: 128px;
  @media (min-width: 960px) {
    width: 112px;
    height: 156px;
  }
  padding: 12px;
  display: block;
  width: 112px;
  height: 156px;
  background-color: #fff;
  border-radius: 12px;

  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border: 2px solid transparent;
  transition: border 0.2s ease;
  border-radius: 12px;

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

const Image = styled.img`
  position: relative;
  display: block;
  width: 64px;
  height: 64px;
  margin-bottom: 8px;
  @media (min-width: 960px) {
    margin-bottom: 12px;
  }
  top: -18.8px;
  @media (min-width: 960px) {
    top: -21.75px;
  }
  transform: translate3d(-50%, 0, 0);
  left: 50%;
`;

const LabelText = styled.p`
  display: block;
  margin-bottom: 8px;
  @media (min-width: 960px) {
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
const LegendCheckbox = styled(Legend)`
  margin-bottom: 16px;
`;

export const CheckboxGroup = ({ register, legend, options, name }) => {
  return (
    <>
      <LegendCheckbox>{legend}</LegendCheckbox>
      <Fieldset>
        {Object.entries(options).map(option => {
          return (
            <Article key={option[1].id}>
              <Input
                key={option[1].id}
                id={option[1].id}
                ref={register}
                type='checkbox'
                name={name}
                value={option[1].slug}
                hidden
              />
              <Label htmlFor={option[1].id} className={option[1].slug}>
                <Image
                  src={`${serverImgs}${option[1].thumbnail}`}
                  alt={option[1].name}
                />
                <LabelText>{option[1].name}</LabelText>
                <PriceInputContainer>
                  <Price>{option[1].price}₽</Price>
                  <Checkbox>
                    <StyledIconCheck fill='#fff' width='14' />
                  </Checkbox>
                </PriceInputContainer>
              </Label>
            </Article>
          );
        })}
      </Fieldset>
    </>
  );
};

CheckboxGroup.propTypes = {
  register: PropTypes.func,
  legend: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
};
