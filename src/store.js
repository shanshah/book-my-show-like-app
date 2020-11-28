import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';

import reducers from './reducers';

const loggerMiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });

let middleware = [promise(), thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, loggerMiddleware];
}

export default createStore(reducers, {}, applyMiddleware(...middleware));