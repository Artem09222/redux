import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { ToastContainer } from 'react-toastify'; 
import App from './App';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';
import store from './components/redux/store';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename="/redux"> 
        <ToastContainer />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
