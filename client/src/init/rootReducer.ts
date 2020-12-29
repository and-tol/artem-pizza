import { combineReducers } from 'redux';

// Reducers
import { pizzaConfiguratorReducer as pizza } from '../pages/pizza-configurator-page/state-pizza/reducer';
import { ingredientsReducer as ingredients } from '../pages/pizza-configurator-page/state-ingredients/reducer';
/*
rootReducer
{
  pizza:{}
  ingredients: []
}
*/

export const rootReducer = combineReducers({
  pizza,
  ingredients
});
