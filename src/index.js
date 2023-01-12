import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './normalize.css';
import './scss/index.scss';
import App from './App';
import HousingContextProvider from './context/housings-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <HousingContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HousingContextProvider>
  </React.Fragment>
);
