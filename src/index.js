import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import App from './Sections/App';
import './Sections/index.scss';
import './Sections/helper.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
