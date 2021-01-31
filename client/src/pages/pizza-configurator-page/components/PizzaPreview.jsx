import { useSelector } from 'react-redux';
import styled from 'styled-components';
// Hooks
import { useWindowDimensions } from '../../../share/hooks/useWindowsDimentions';
// Components
import { ButtonPrimary } from '../../../share/styled-components/Button';

// Images
import plate from '../../../asserts/plate.png';
import thin from '../../../asserts/thin.png';
import thick from '../../../asserts/thick.png';
import { serverImgs } from '../../../api/config';
// Selectors
import { getIngredientsByCategory } from '../state-ingredients/ingredientsSelectors';
// Helpers
import { renderIngredients } from '../../../share/renderIngredient';
import { useEffect, useState } from 'react';

// Styles
const Section = styled.section`
  @media (min-width: 960.5px) {
    width: 350px;
    max-width: 350px;
  }
`;
const H3 = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: var(--black);
  margin: 0;
  margin-bottom: 8px;
`;
const Preview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 16px;
`;
const Plate = styled.img`
  width: 300px;
  right: -16px;
  position: relative;
  @media (min-width: 960.5px) {
    width: 350px;
  }
`;

const Image = styled.img`
  position: absolute;
  transform: translate3d(-50%, 0, 0);
  left: 50%;
`;
const DoughImage = styled(Image)`
  ${({ size }) => (size === '30' ? 'width: 230px;' : 'width: 255px;')};
  transition: all var(--transition);
  @media (min-width: 960.5px) {
    ${({ size }) => (size === '30' ? 'width: 255px;' : 'width: 300px;')};
  }
`;
const IngredientsImage = styled(Image)`
  ${({ size }) => (size === '30' ? 'width: 194px' : 'width: 218px')};
  left: 49%;
  transition: all var(--transition);
  @media (min-width: 960.5px) {
    ${({ size }) => (size === '30' ? 'width: 213px' : 'width: 266px')};
    left: 50%;
  } ;
`;
const Composition = styled.div`
  margin-bottom: 24px;
  @media (min-width: 960.5px) {
    margin-bottom: 32px;
  } ;
`;
const CompositionItem = styled.p`
  margin-bottom: 4px;
  @media (min-width: var(--point-desktop)) {
    margin-bottom: 6px;
  } ;
`;
const Button = styled(ButtonPrimary)`
  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const PizzaPreview = ({ pizza, ingredients, totalPrice, onSubmit }) => {
  const { width: windowWidth } = useWindowDimensions();
  const { size, dough, sauces, cheese, vegetables, meat } = pizza;

  const CHEESE = useSelector(getIngredientsByCategory('cheese'));
  const VEGETABLES = useSelector(getIngredientsByCategory('vegetables'));
  const MEAT = useSelector(getIngredientsByCategory('meat'));
  const SAUCES = useSelector(getIngredientsByCategory('sauces'));

  /**
   * What is dough type?
   */
  const [doughImageLink, setDoughImageLink] = useState(null);
  useEffect(() => {
    if (dough === 'thin') {
      setDoughImageLink(thin);
    }
    if (dough === 'thick') {
      setDoughImageLink(thick);
    }
  }, [dough]);

  return (
    <Section>
      <Preview>
        <Plate src={plate} alt='plate' />
        {}
        <DoughImage size={size} src={doughImageLink} alt='dough' />
        {cheese &&
          cheese.map(c => (
            <IngredientsImage
              key={c}
              src={`${serverImgs}${c}.png`}
              size={size}
            />
          ))}
        {meat &&
          meat.map(m => (
            <IngredientsImage
              key={m}
              src={`${serverImgs}${m}.png`}
              size={size}
            />
          ))}
        {vegetables &&
          vegetables.map(v => (
            <IngredientsImage
              key={v}
              src={`${serverImgs}${v}.png`}
              size={size}
            />
          ))}
        {/* there should be sauces here */}
      </Preview>
      <H3>Маргарита</H3>
      <Composition>
        <CompositionItem>
          <span>{!!size && ` ${renderIngredients(size, ingredients)}`}</span>
          см на тесте
          <span>{!!dough && ` ${renderIngredients(dough, ingredients)}`}</span>
        </CompositionItem>
        <CompositionItem>
          {sauces !== undefined && sauces.length && SAUCES.length
            ? `Соус: ${renderIngredients(sauces, ingredients)}`
            : null}
        </CompositionItem>
        <CompositionItem>
          {cheese !== undefined && cheese.length && CHEESE.length
            ? `Сыр: ${renderIngredients(cheese, CHEESE)}`
            : null}
        </CompositionItem>
        <CompositionItem>
          {vegetables !== undefined && vegetables?.length && VEGETABLES.length
            ? `Овощи: ${renderIngredients(vegetables, VEGETABLES)}`
            : null}
        </CompositionItem>
        <CompositionItem>
          {meat !== undefined && meat?.length && MEAT.length
            ? `Мясо: ${renderIngredients(meat, MEAT)}`
            : null}
        </CompositionItem>
      </Composition>
      {windowWidth >= 960 ? (
        <Button type='submit' onClick={onSubmit}>
          Заказать за {totalPrice}руб.
        </Button>
      ) : null}
    </Section>
  );
};
