//
import { createStore, applyMiddleware, compose } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { rootReducer }  from 'app/reducers';

const router = routerMiddleware(createBrowserHistory);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, router));

export default function configureStore(initialState) {
  return createStore(enableBatching(rootReducer), initialState, enhancer);
}
