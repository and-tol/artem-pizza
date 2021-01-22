import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { checkoutReducer as checkout } from '../pages/checkout-page/state/checkoutReducer';
import { loginReducer as login } from '../pages/login-page/state/loginReducer';
import { ordersListReducer as orders } from '../pages/orders-list-page/state/ordersListReducer';
import { ingredientsReducer as ingredients } from '../pages/pizza-configurator-page/state-ingredients/reducer';
import { pizzaConfiguratorReducer as pizza } from '../pages/pizza-configurator-page/state-pizza/reducer';
import { signupReducer as signup } from '../pages/signup-page/state/reducer';

// Store
export const store = configureStore({
  reducer: { pizza, ingredients, orders, login, signup, checkout },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
