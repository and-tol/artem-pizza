import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { checkoutReducer } from '../pages/CheckoutPage/state/checkoutReducer'
import { loginReducer } from '../pages/LoginPage/state/loginReducer'
import { ordersListReducer } from '../pages/OrdersListPage/state/ordersListReducer'
import { ingredientsReducer } from '../pages/PizzaConfiguratorPage/state-ingredients/ingredientsReducer'
import { pizzaReducer } from '../pages/PizzaConfiguratorPage/state-pizza/pizzaReducer'
import { signupReducer } from '../pages/SignupPage/state/signupReducer'


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
