import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import {fetchIngredientsAsync} from '../../pages/pizza-configurator-page/state-ingredients/ingredientsReducer';
// Selectors
import { getIngredients } from '../../pages/pizza-configurator-page/state-ingredients/ingredientsSelectors';
// Components
import { OrderPreview } from './OrderPreview';
// Icons
import { ReactComponent as IconDelivery } from '../../asserts/icons/icn_delivery.svg';



export const Order = ({ order }) => {
  const { cardNumber, pizza } = { ...order };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredientsAsync());
  }, [dispatch]);

  const ingredients = useSelector(getIngredients);

  return (
    <section>
      <header>
        <div>
          Заказ <span>2390</span>
          <time>21 октября 2020, 13:40</time>
          <span>• Доставлен</span>
        </div>
      </header>
      <div>
        <h3>Ленивая Маргарита</h3>
        <OrderPreview pizza={pizza} ingredients={ingredients} />
      </div>
      <hr />
      <footer>
        <div>
          <span>420</span> руб
          <span> • </span>
          оплата MC <span>{`*${cardNumber.slice(-4)} `}</span>
          <span>
            <IconDelivery fill='orange' />
            Доставляется
          </span>
        </div>
      </footer>
    </section>
  );
};
