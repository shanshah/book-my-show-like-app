import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

// import Routes from './src/Routes';
// import App from './src/App';
// import store from './src/store/store';

import store from './src/store';
import Routes from './src/Routes';

import App from './src/App';

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('app'),
);