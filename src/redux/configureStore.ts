import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import rootReducer from './reducers';
import rootSaga from './sagas/rootSaga';

export default function ConfigureAppStore(initialState = {}) {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const middlewares = [sagaMiddleware];

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
  });
  sagaMiddleware.run(rootSaga);
  return store;
}