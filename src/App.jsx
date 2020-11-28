import React from 'react';
import Routes from './Routes';

import './app.css'

const App = () =>  (
  <div className="app-container">
    <header className="app-header">
      <div className="app-header-logo">Logo</div>
    </header>
    <div className="app-routes-container">
      <Routes />
    </div>
  </div>
);

export default App;