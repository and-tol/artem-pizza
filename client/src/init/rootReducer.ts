import { combineReducers } from 'redux';

// Reducers
import { pizzaConfiguratorReducer as pizza } from '../pages/pizza-configurator-page/state-pizza/reducer';
import { ingredientsReducer as ingredients } from '../pages/pizza-configurator-page/state-ingredients/reducer';
import { ordersListReducer as orders } from '../pages/orders-list-page/state/reducer';
import { loginReducer as login } from '../pages/login-page/state/reducer';

export const rootReducer = combineReducers({
  pizza,
  ingredients,
  orders,
  login,
});
