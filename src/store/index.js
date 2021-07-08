import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './modules/rootSaga';
import reducers from './modules/rootReducer';
import persistedRedux from './modules/persistedRedux';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    persistedRedux(reducers),
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
