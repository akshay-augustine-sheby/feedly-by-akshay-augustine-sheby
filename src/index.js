import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import NewsPreview from './Landing page/NewsPreview';
import ArticlePage from './ArticlePage/ArticlePage';
import ErrorBoundary from './ErrorBoundary';


ReactDOM.render(
  <BrowserRouter>
  <ErrorBoundary>
    
      <App />
  </ErrorBoundary>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
