import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import detailReducer from './detail/DetailSlice';

const logger = createLogger({
  // Options for the logger can be passed here
  // Show only the actions in the console
  predicate: (getState, action) => action.type !== 'SOME_ACTION',
  // Collapse the logs by default
  collapsed: true,
});

const store = configureStore({
  reducer: {
    country: homeReducer,
    city: detailReducer,
  },
  applyMiddleware:[thunk, logger],
});

export default store;