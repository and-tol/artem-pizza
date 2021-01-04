import { combineReducers } from 'redux';
import { checkoutReducer as checkout } from '../pages/checkout-page/state/reducer';
import { loginReducer as login } from '../pages/login-page/state/reducer';
import { ordersListReducer as orders } from '../pages/orders-list-page/state/reducer';
import { ingredientsReducer as ingredients } from '../pages/pizza-configurator-page/state-ingredients/reducer';
// Reducers
import { pizzaConfiguratorReducer as pizza } from '../pages/pizza-configurator-page/state-pizza/reducer';
import { signupReducer as signup } from '../pages/signup-page/state/reducer';


export const rootReducer = combineReducers({
  pizza,
  ingredients,
  orders,
  login,
  signup,
  checkout,
});
