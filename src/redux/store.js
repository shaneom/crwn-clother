import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSageMiddleware from 'redux-saga';

import rootSage from './root-saga';

import rootReducer from './root-reducer';

const sageMiddleware = createSageMiddleware();

const middlewares = [sageMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sageMiddleware.run(rootSage);

const persistor = persistStore(store);

export { store, persistor };
