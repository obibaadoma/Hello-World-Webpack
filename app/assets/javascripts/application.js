// application.js or your React entry file
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Adjust the path as needed

document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.getElementById('app');

  if (appElement) {
    ReactDOM.render(<App />, appElement);
  }
});
