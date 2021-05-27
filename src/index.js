import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styles.css';
import { CounterContextProvider } from './contexts/CounterContext';

import { Home } from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
