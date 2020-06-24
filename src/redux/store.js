import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const middlewares = [];

middlewares.push(sagaMiddleware);

const appReducer = combineReducers({
  ...reducers,
});

const rootReducer = (state, action) => appReducer(state, action);

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(rootSaga);

export { store, history };
