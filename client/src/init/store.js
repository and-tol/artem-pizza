import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { checkoutReducer } from '../pages/checkout-page/state/checkoutReducer';
// import { checkoutReducer as checkout } from '../pages/checkout-page/state/checkoutReducer';
import { loginReducer  } from '../pages/login-page/state/loginReducer';
import { ordersListReducer  } from '../pages/orders-list-page/state/ordersListReducer';
import { ingredientsReducer } from '../pages/pizza-configurator-page/state-ingredients/ingredientsReducer';
import { pizzaReducer } from '../pages/pizza-configurator-page/state-pizza/pizzaReducer';
import { signupReducer  } from '../pages/signup-page/state/signupReducer';

// Store
export const store = configureStore({
  reducer: {
    pizza: pizzaReducer.reducer,
    ingredients: ingredientsReducer.reducer,
    ordersList: ordersListReducer.reducer,
    login:loginReducer.reducer,
    signup: signupReducer.reducer,
    checkout: checkoutReducer.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
