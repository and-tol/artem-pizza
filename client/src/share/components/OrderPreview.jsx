import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
// Selectors
import { getIngredientsByCategory } from '../../pages/PizzaConfiguratorPage/state-ingredients/ingredientsSelectors'
// Date
import { DEFAULT_PIZZA, PIZZA_DATA_PRIMARY } from '../../pizzaData'
// Helpers
import { renderIngredients } from '../renderIngredients'

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

export const OrderPreview = ({ pizza = DEFAULT_PIZZA, ingredients }) => {
  const { pathname } = useLocation();
  const { size, dough, sauces, cheese, vegetables, meat } = pizza;

  const SIZE = PIZZA_DATA_PRIMARY.size;
  const DOUGH = PIZZA_DATA_PRIMARY.dough;

  const CHEESE = useSelector(getIngredientsByCategory('cheese'));
  const VEGETABLES = useSelector(getIngredientsByCategory('vegetables'));
  const MEAT = useSelector(getIngredientsByCategory('meat'));
  const SAUCES = useSelector(getIngredientsByCategory('sauces'));

  return (
    <>
      <Composition pathname={pathname}>
        <Title>Ленивая Маргарита</Title>
        <span>{!!size && ` ${renderIngredients(size, SIZE)} `}</span>
        см на
        <span>
          {!!dough && ` ${DOUGH.filter(f => dough === f.slug)[0].case} `}
        </span>
        тесте
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

OrderPreview.propTypes = {
  pizza: PropTypes.object.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.object),
};
