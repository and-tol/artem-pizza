import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
// Hooks
import { useWindowDimensions } from '../hooks/useWindowDimentions';
// Selectors
import { getIngredientsByCategory } from '../../pages/pizza-configurator-page/state-ingredients/ingredientsSelectors';
// Helpers
import { renderIngredients } from '../renderIngredient';
// TODO: +++++++++
import { calculateTotalPrice } from '../calculateTotalPrice';

// Styles
const Composition = styled.div`
  padding-bottom: 24px;
  padding-bottom: ${({ pathname }) => pathname === '/checkout' && '16px'};
  @media (min-width: 960px) {
    padding-bottom: 32px;
  } ;
`;
const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: var(--black);
  margin: 0;
  margin-bottom: 8px;
`;
const CompositionItem = styled.p`
  margin-bottom: 4px;
  @media (min-width: var(--point-desktop)) {
    margin-bottom: 6px;
  } ;
`;

export const OrderPreview = ({ pizza, ingredients }) => {
  const { pathname } = useLocation();
  const { width: windowWidth } = useWindowDimensions();
  const { size, dough, sauces, cheese, vegetables, meat } = pizza;

  const CHEESE = useSelector(getIngredientsByCategory('cheese'));
  const VEGETABLES = useSelector(getIngredientsByCategory('vegetables'));
  const MEAT = useSelector(getIngredientsByCategory('meat'));
  const SAUCES = useSelector(getIngredientsByCategory('sauces'));

  return (
    <>
      <Composition pathname={pathname}>
        <Title>Ленивая Маргарита</Title>
        <span>{!!size && ` ${renderIngredients(size, ingredients)}`}</span>
        см на тесте
        <span>{!!dough && ` ${renderIngredients(dough, ingredients)}`}</span>
        <span>
          {sauces !== undefined && sauces.length && SAUCES.length
            ? ` • Соус: ${renderIngredients(sauces, ingredients)}`
            : null}
        </span>
        <span>
          {cheese !== undefined && cheese.length && CHEESE.length
            ? ` • Сыр: ${renderIngredients(cheese, CHEESE)}`
            : null}
        </span>
        <span>
          {vegetables !== undefined && vegetables?.length && VEGETABLES.length
            ? ` • Овощи: ${renderIngredients(vegetables, VEGETABLES)}`
            : null}
        </span>
        <span>
          {meat !== undefined && meat?.length && MEAT.length
            ? ` • Мясо: ${renderIngredients(meat, MEAT)}`
            : null}
        </span>
      </Composition>
    </>
  );
};
