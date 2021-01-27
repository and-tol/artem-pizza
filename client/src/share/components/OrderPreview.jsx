import { useSelector } from 'react-redux';
import styled from 'styled-components';
// Config
import { root as url} from '../../api/config'
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
`;
const Preview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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
const DoughImage = styled(Image)`
  width: 255px;
`;
const IngredientImage = styled(Image)`
  width: 230px;
`;

export const OrderPreview = ({ pizza, ingredients }) => {
  const { size, dough, sauce, cheese, vegetables, meat } = pizza;

  console.log('sauce>>>', sauce);

  const CHEESE = useSelector(getIngredientsByCategory('cheese'));
  const VEGETABLES = useSelector(getIngredientsByCategory('vegetables'));
  const MEAT = useSelector(getIngredientsByCategory('meat'));

  return (
    <section>
      <Preview>
        <Plate src={plate} alt='plate' />
        {meat && meat.map(m => <IngredientImage key={m} src={`${url}${m}`} />)}
        {vegetables &&
          vegetables.map(v => <IngredientImage key={v} src={`${url}${v}`} />)}
        {cheese &&
          cheese.map(c => <IngredientImage key={c} src={`${url}${c}`} />)}
          <IngredientImage src={`${url}${sauce}`} alt={sauce} />
      </Preview>
      <H3>Маргарита</H3>
      <p>
        <span>{!!size && ` ${renderIngredients(size, ingredients)}`}</span>
        см на тесте
        <span>{!!dough && ` ${renderIngredients(dough, ingredients)}`}</span>
        <span>{` • ${
          !!sauce && ` ${renderIngredients(sauce, ingredients)} `
        }`}</span>
        соус
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
      </p>
    </section>
  );
};
