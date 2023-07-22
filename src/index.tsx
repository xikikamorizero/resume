import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/index';
import reportWebVitals from './reportWebVitals';
import './app/styled/index.css';
import './app/styled/colors.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

reportWebVitals();