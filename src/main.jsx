import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ваш компонент App
import './index.css'; // Ваші стилі

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
