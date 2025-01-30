import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ToastContainer } from 'react-toastify';
import store from './store'; // Убедись, что этот файл есть
import App from './App';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';

const browserHistory = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory} basename='/FinalReactProjects/'>
        <ToastContainer />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();