import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { ToastContainer } from 'react-toastify';
import store from './store'; 
import App from './App';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename="/FinalReactProjects/"> 
        <ToastContainer />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
