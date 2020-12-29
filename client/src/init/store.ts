import { createStore, applyMiddleware } from 'redux';

import { rootReducer } from './rootReducer';
import { composeEnhancers, middleware } from './middleware';

// Store
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
