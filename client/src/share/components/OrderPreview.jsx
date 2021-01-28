import { useSelector } from 'react-redux';
import styled from 'styled-components';
// Config
import { root as url } from '../../api/config';
// Img
import plate from '../../asserts/plate.png';
import thin from '../../asserts/thin.png';
import bacon from '../../asserts/ingredients/bacon.png';
// Selectors
import { getIngredientsByCategory } from '../../pages/pizza-configurator-page/state-ingredients/ingredientsSelectors';
// Helpers
import { renderIngredients } from '../renderIngredient';

// Styles
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
  @media (min-width: var(--point-desktop)) {
    width: 350px;
  }
`;

const Image = styled.img`
  position: absolute;
  transform: translate3d(-50%, 0, 0);
  left: 50%;
`;
const IngredientImage = styled(Image)`
  width: 255px;
`;
const IngredientsImage = styled(Image)`
  width: 230px;
`;
const P = styled.p`
  margin-bottom: 24px;
  @media (min-width: var(--point-desktop));
`;

export const OrderPreview = ({ pizza, ingredients }) => {
  const { size, dough, sauces, cheese, vegetables, meat } = pizza;

  const CHEESE = useSelector(getIngredientsByCategory('cheese'));
  const VEGETABLES = useSelector(getIngredientsByCategory('vegetables'));
  const MEAT = useSelector(getIngredientsByCategory('meat'));
  const SAUCES = useSelector(getIngredientsByCategory('sauces'));

  return (
    <section>
      <Preview>
        <Plate src={plate} alt='plate' />
        <IngredientImage src={`${url}${dough}`} />
        {meat && meat.map(m => <IngredientsImage key={m} src={`${url}${m}`} />)}
        {vegetables &&
          vegetables.map(v => <IngredientsImage key={v} src={`${url}${v}`} />)}
        {cheese &&
          cheese.map(c => <IngredientsImage key={c} src={`${url}${c}`} />)}
        <IngredientImage src={`${url}${sauces}`} />
      </Preview>
      <H3>Маргарита</H3>
      <P>
        <span>{!!size && ` ${renderIngredients(size, ingredients)}`}</span>
        см на тесте
        <span>{!!dough && ` ${renderIngredients(dough, ingredients)}`}</span>
        <br />
        <span>
          {sauces !== undefined && sauces.length && SAUCES.length
            ? `Соус: ${renderIngredients(sauces, ingredients)}`
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
      </P>
    </section>
  );
};
