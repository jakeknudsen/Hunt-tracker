import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducer';

const middleware = [thunk];

const makeStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export const wrapper = createWrapper(makeStore);
